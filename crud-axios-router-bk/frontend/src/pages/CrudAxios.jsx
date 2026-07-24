import axios from "axios";
import { use, useEffect, useState } from "react";
import baseUrl from "../config/utils";

const CrudAxios = () => {
  const initialInput = {
    movieTitle: "",
    movieYear: "",
    movieId: null,
    categoryId: "",
  };

  const [data, setData] = useState([]);
  const [category, setCategory] = useState([]);
  const [input, setInput] = useState(initialInput);

  const fetchDataMovie = () => {
    axios
      .get(`${baseUrl}/api/movie`)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const fetchDataCategory = () => {
    axios
      .get(`${baseUrl}/api/category`)
      .then((res) => {
        setCategory(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      if (input.movieId) {
        await axios.put(`${baseUrl}/api/movie/${input.movieId}`, {
          title: input.movieTitle,
          year: input.movieYear,
          catId: input.categoryId,
        });
      } else {
        await axios.post(`${baseUrl}/api/movie`, {
          title: input.movieTitle,
          year: input.movieYear,
          catId: input.categoryId,
        });
      }
      fetchDataMovie();
      setInput(initialInput);
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
      await axios.delete(`${baseUrl}/api/movie/${id}`);
      fetchDataMovie();
    } catch (err) {
      alert(err);
    }
  };

  const handleEdit = async (id) => {
    try {
      let respond = await axios.get(`${baseUrl}/api/movie/${id}`);
      let {
        id_tb_movie: movieId,
        title_tb_movie: movieTitle,
        year_tb_movie: movieYear,
        id_category: categoryId,
      } = respond.data[0];
      setInput({ movieId, movieTitle, movieYear, categoryId });
    } catch (err) {
      alert(err);
    }
  };

  useEffect(() => {
    fetchDataMovie();
    fetchDataCategory();
  }, []);

  return (
    <>
      <h1>CRUD AXIOS</h1>
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

          <label htmlFor="categoryId">Category</label>
          <select
            id="categoryId"
            name="categoryId"
            onChange={handleChange}
            value={input.categoryId}
            required
          >
            <option value="">-- Pilih Category --</option>;
            {category.map((category, index) => {
              return (
                <option value={category.id_tb_category} key={index}>
                  {category.name_tb_category}
                </option>
              );
            })}
          </select>

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
              <th>Category</th>
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
                  <td>{item.name_tb_category}</td>
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
