import axios from "axios";
import { use, useEffect, useState } from "react";
import baseUrl from "../../config/utils";
import { useNavigate, Link, useParams } from "react-router";

const FormCategory = () => {
  let navigate = useNavigate();
  let { id } = useParams();
  const [data, setData] = useState([]);
  // const [input, setInput] = useState({ movieTitle: "", movieYear: "" });
  const [input, setInput] = useState({
    catName: "",
    catDesc: "",
    catId: null,
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      if (input.catId) {
        await axios.put(`${baseUrl}/api/category/${input.catId}`, {
          name: input.catName,
          desc: input.catDesc,
        });
      } else {
        await axios.post(`${baseUrl}/api/category`, {
          name: input.catName,
          desc: input.catDesc,
        });
      }
      setInput({ catName: "", catDesc: "", catId: null });
      navigate("/category");
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

  const fetchData = async () => {
    try {
      let res = await axios.get(`${baseUrl}/api/category/${id}`);
      // console.log(res.data[0]);
      let {
        id_tb_category: catId,
        name_tb_category: catName,
        desc_tb_category: catDesc,
      } = res.data[0];
      setInput({ catId, catName, catDesc });
    } catch (err) {
      alert(err);
    }
  };

  return (
    <>
      <h1>{id ? "EDIT CATEGORY" : "CREATE CATEGORY"} </h1>
      <div className="div-input-movie">
        <form onSubmit={handleSubmit}>
          <label htmlFor="catName">Category Name</label>
          <input
            type="text"
            id="catName"
            name="catName"
            placeholder="Input Your Category Name.."
            onChange={handleChange}
            required
            value={input.catName}
          />

          <label htmlFor="catDesc">Category Description</label>
          <textarea
            id="catDesc"
            name="catDesc"
            placeholder="Description of the category.."
            onChange={handleChange}
            value={input.catDesc}
          />

          <input type="submit" value={id ? "Update" : "Submit"} />

          <hr />

          <Link className="button bt-cancel" to="/category">
            Cancel
          </Link>
        </form>
      </div>
    </>
  );
};
export default FormCategory;
