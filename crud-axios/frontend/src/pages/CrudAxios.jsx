import axios from "axios";
import { use, useEffect, useState } from "react";

const CrudAxios = () => {
  const [data, setData] = useState([]);
  // const [input, setInput] = useState({ movieTitle: "", movieYear: "" });
  const [input, setInput] = useState({
    movieTitle: "",
    movieYear: "",
    movieId: null,
  });

  const fetchData = () => {
    axios.get("http://localhost:3000/api/movie").then((res) => {
      setData(res.data);
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      if (input.movieId) {
        await axios.put(`http://localhost:3000/api/movie/${input.movieId}`, {
          title: input.movieTitle,
          year: input.movieYear,
        });
      } else {
        await axios.post("http://localhost:3000/api/movie", {
          title: input.movieTitle,
          year: input.movieYear,
        });
      }
      fetchData();
      setInput({ movieTitle: "", movieYear: "", movieId: null });
    } catch (err) {
      console.error(err);
    }
  };

  const handleChange = (event) => {
    let { value, name } = event.target;
    setInput({ ...input, [name]: value });
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/api/movie/${id}`);
      fetchData();
    } catch (err) {
      alert(err);
    }
  };

  const handleEdit = async (id) => {
    try {
      // console.log(id);
      let respond = await axios.get(`http://localhost:3000/api/movie/${id}`);
      // console.log(respond.data[0]);
      let {
        id_tb_movie: movieId,
        title_tb_movie: movieTitle,
        year_tb_movie: movieYear,
      } = respond.data[0];
      // console.log(title_tb_movie);
      // console.log(year_tb_movie);
      setInput({ movieId, movieTitle, movieYear });
      // console.log(input);
    } catch (err) {
      alert(err);
    }
  };

  useEffect(() => {
    fetchData();
    console.log(input);
  }, [input]);

  return (
    <>
      <h1>CURD AXIOS</h1>
      <div className="div-input-movie">
        <form onSubmit={handleSubmit}>
          <label htmlFor="movieTitle">Movie Title</label>
          <input
            type="text"
            id="movieTitle"
            name="movieTitle"
            placeholder="Input Your Movie Title.."
            onChange={handleChange}
            required
            value={input.movieTitle}
          />

          <label htmlFor="movieYear">Movie Year</label>
          <input
            type="number"
            id="movieYear"
            name="movieYear"
            placeholder="Input Movie Year.."
            onChange={handleChange}
            required
            value={input.movieYear}
          />

          <input type="submit" value="Submit" />
        </form>
      </div>
      <div className="div-table-movie">
        <table>
          <thead>
            <tr>
              <th>No</th>
              <th>Title</th>
              <th>Year</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => {
              return (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{item.title_tb_movie}</td>
                  <td>{item.year_tb_movie}</td>
                  <td>
                    <button
                      className="bt-del"
                      onClick={() => {
                        if (confirm("Apa Anda Yakin Menghapus File Ini ?")) {
                          handleDelete(item.id_tb_movie);
                        }
                      }}
                    >
                      Delete
                    </button>
                    <button
                      className="bt-edit"
                      onClick={() => {
                        handleEdit(item.id_tb_movie);
                      }}
                    >
                      Edit
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      `
    </>
  );
};
export default CrudAxios;
