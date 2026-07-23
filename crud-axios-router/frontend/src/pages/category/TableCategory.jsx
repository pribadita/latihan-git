import { use, useEffect, useState } from "react";
import baseUrl from "../../config/utils";
import axios from "axios";

const TableCategory = () => {
  const [data, setData] = useState([]);
  // const [input, setInput] = useState({ movieTitle: "", movieYear: "" });
  const [input, setInput] = useState({
    movieTitle: "",
    movieYear: "",
    movieId: null,
  });

  const fetchData = () => {
    axios.get(`${baseUrl}/api/category`).then((res) => {
      setData(res.data);
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      if (input.movieId) {
        await axios.put(`${baseUrl}/api/movie/${input.movieId}`, {
          title: input.movieTitle,
          year: input.movieYear,
        });
      } else {
        await axios.post(`${baseUrl}/api/movie`, {
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
      await axios.delete(`${baseUrl}/api/category/${id}`);
      fetchData();
    } catch (err) {
      alert(err);
    }
  };

  const handleEdit = async (id) => {
    try {
      // console.log(id);
      let respond = await axios.get(`${baseUrl}/api/movie/${id}`);
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
  }, []);

  return (
    <>
      <h1>TABLE CATEGORY</h1>
      <div className="div-table-movie">
        <table>
          <thead>
            <tr>
              <th>No</th>
              <th>Name</th>
              <th>Description</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => {
              return (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{item.name_tb_category}</td>
                  <td>{item.desc_tb_category}</td>
                  <td>
                    <button
                      className="bt-del"
                      onClick={() => {
                        if (confirm("Apa Anda Yakin Menghapus File Ini ?")) {
                          handleDelete(item.id_tb_category);
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
export default TableCategory;
