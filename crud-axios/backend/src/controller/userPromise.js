const connectionPool = require("../config/db.js");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");


const register = (req, res) => {
    let { email, name, password } = req.body;

    let checkQuery = "SELECT * FROM users WHERE email = ?";

    // connectionPool.query pada mysql2 secara default menggunakan callback, 
    // namun kita bisa membungkus fungsinya atau memanfaatkan library agar rapi.
    // Jika db.js kamu tidak memakai .promise(), kita jalankan query pertama via callback,
    // lalu operasi berat seperti bcrypt dan query selanjutnya diteruskan via Promise.
    
    connectionPool.query(checkQuery, [email], (err, users) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ status: "Failed", message: err.message });
        }

        if (users.length > 0) {
            return res.status(409).json({ message: "User already exists" });
        }

        // Mulai menggunakan Promise Berantai dari Bcrypt
        bcrypt.hash(password, 10)
            .then((hashedPassword) => {
                let insertQuery = "INSERT INTO users (email, name, password) VALUES (?, ?, ?)";
                
                // Menjalankan query insert, kita bungkus ke dalam Promise manual jika pool-mu versi callback
                return new Promise((resolve, reject) => {
                    connectionPool.query(insertQuery, [email, name, hashedPassword], (err, result) => {
                        if (err) reject(err);
                        else resolve(result);
                    });
                });
            })
            .then(() => {
                // Jika semua proses di atas berhasil
                return res.status(200).json({
                    data: null,
                    message: "User Successfully Created",
                    status: "Success"
                });
            })
            .catch((err) => {
                // Menangkap semua error yang terjadi di dalam blok .then() di atas
                console.error(err);
                return res.status(500).json({ status: "Failed", message: err.message });
            });
    });
};

const login = (req, res) => {
    let { email, password } = req.body;
    let queryText = "SELECT * FROM users WHERE email = ?";

    connectionPool.query(queryText, [email], (err, users) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ status: "Failed", message: err.message });
        }

        const user = users[0];

        if (!user) {
            return res.status(401).json({ 
                message: 'Invalid credentials',
                status: "Invalid"
            });
        }

        // Mulai menggunakan Promise Berantai untuk Bcrypt Compare
        bcrypt.compare(password, user.password)
            .then((isMatch) => {
                if (!isMatch) {
                    // Memicu error buatan agar langsung lompat ke blok .catch() di bawah
                    throw new Error("PASSWORD_WRONG");
                }

                // Jika password cocok, buat token JWT
                const accessToken = jwt.sign({ email: user.email }, process.env.JWT_SECRET);
                return res.json(accessToken);
            })
            .catch((err) => {
                if (err.message === "PASSWORD_WRONG") {
                    return res.status(401).json({ 
                        message: 'Invalid credentials',
                        status: "Invalid"
                    });
                }
                
                // Menangani error internal server lainnya
                console.error(err);
                return res.status(500).json({ status: "Failed", message: err.message });
            });
    });
};

module.exports = {register, login}