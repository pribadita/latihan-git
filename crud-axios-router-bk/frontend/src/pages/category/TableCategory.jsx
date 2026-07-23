import axios from "axios";
import { use, useEffect, useState } from "react";
import baseUrl from "../../config/utils";
import { useNavigate } from "react-router";

const TableCategory = () => {
  let navigate = useNavigate();

  const [data, setData] = useState([]);
  // const [input, setInput] = useState({ movieTitle: "", movieYear: "" });
  const [input, setInput] = useState({
    catNam: "",
    catDes: "",
    catId: null,
  });

  const fetchData = () => {
    axios.get(`${baseUrl}/api/category`).then((res) => {
      setData(res.data);
    });
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
    navigate(`/category/${id}/edit`);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const addCategory = () => {
    navigate("create");
  };

  return (
    <>
      <h1>CATEGORY LIST</h1>
      <div className="div-button-add-category">
        <button className="button bt-create" onClick={addCategory}>
          Add Category
        </button>
      </div>
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
                        if (
                          confirm("Apa Anda Yakin Menghapus Category Ini ?")
                        ) {
                          handleDelete(item.id_tb_category);
                        }
                      }}
                    >
                      Delete
                    </button>
                    <button
                      className="bt-edit"
                      onClick={() => {
                        handleEdit(item.id_tb_category);
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
