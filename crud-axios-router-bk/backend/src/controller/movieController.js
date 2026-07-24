const connectionPool = require("../config/db.js");

const readMovie = (req, res) => {
  let queryText = `SELECT
    *
  FROM tb_movie
  LEFT JOIN tb_category
  ON tb_movie.id_category = tb_category.id_tb_category`;

  connectionPool.query(queryText, (err, data) => {
    if (err) {
      console.err(err);
      return;
    }

    res.json(data);
  });
};

const readMovieById = (req, res) => {
  let { id } = req.params;
  let queryText = `SELECT * FROM tb_movie WHERE id_tb_movie = ${id}`;

  connectionPool.query(queryText, (err, data) => {
    if (err) {
      console.error(err);
      return;
    }

    res.json(data);
  });
};

const createMovie = (req, res) => {
  let { title, year, catId } = req.body;
  let queryText = `INSERT INTO tb_movie(title_tb_movie, year_tb_movie, id_category)
                    VALUES ("${title}", ${year}, ${catId})`;
  connectionPool.query(queryText, (err, data) => {
    if (err) {
      console.log(err);
      return;
    }
    res.json({ Message: "Berhasil" });
  });
};

const updateMovie = (req, res) => {
  let { title, year, catId } = req.body;
  let { id } = req.params;
  let queryText = `UPDATE tb_movie
                    SET title_tb_movie = "${title}", year_tb_movie = ${year}, id_category=${catId}
                    WHERE id_tb_movie = ${id} `;

  connectionPool.query(queryText, (err) => {
    if (err) {
      console.log(err);
      return;
    }
    res.json({ Message: "Berhasil" });
  });
};

const deleteMovie = (req, res) => {
  let { id } = req.params;
  let queryText = `DELETE FROM tb_movie WHERE id_tb_movie = ${id}`;

  connectionPool.query(queryText, (err) => {
    if (err) {
      console.log(err);
      return;
    }
    res.json({ Message: "Data Berhasil Dihapus" });
  });
};

module.exports = {
  readMovie,
  readMovieById,
  createMovie,
  updateMovie,
  deleteMovie,
};
