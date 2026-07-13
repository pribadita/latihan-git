import axios from "axios";
import { use, useEffect, useState } from "react";

const CrudAxios = () => {
  const [data, setData] = useState([]);
  const [input, setInput] = useState({ movieTitle: "", movieYear: 0 });

  const fetchData = () => {
    axios.get("http://localhost:3000/api/movie").then((res) => {
      setData(res.data);
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post("http://localhost:3000/api/movie", {
        title: input.movieTitle,
        year: input.movieYear,
      });
      fetchData();
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
      let respond = await axios.get(`http://localhost:3000/api/movie/${id}`);
      console.log(respond);
    } catch (err) {
      alert(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

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
          />

          <label htmlFor="movieYear">Movie Year</label>
          <input
            type="number"
            id="movieYear"
            name="movieYear"
            placeholder="Input Movie Year.."
            onChange={handleChange}
            required
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
                        handleEdit(item.id_table_Movie);
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
