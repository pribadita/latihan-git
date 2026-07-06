require('dotenv').config()
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const connectionPool = require("../config/db.js");

const register = (req, res) => {
    let { email, name, password } = req.body;

    // 1. Query pertama: Cek apakah user sudah ada
    let checkQuery = "SELECT * FROM users WHERE email = ?";

    connectionPool.query(checkQuery, [email], (err, users) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ status: "Failed", message: err.message });
        }

        // Jika user ditemukan, kirim status 409 dan langsung return agar berhenti
        if (users.length > 0) {
            return res.status(409).json({ message: "User already exists" });
        }

        // 2. Jika lolos cek, lakukan hashing password (versi callback)
        bcrypt.hash(password, 10, (err, hashedPassword) => {
            if (err) {
                console.error(err);
                return res.status(500).json({ status: "Failed", message: err.message });
            }

            // 3. Query kedua: Insert user baru dengan password yang sudah di-hash
            let insertQuery = "INSERT INTO users (email, name, password) VALUES (?, ?, ?)";

            connectionPool.query(insertQuery, [email, name, hashedPassword], (err, result) => {
                if (err) {
                    console.error(err);
                    return res.status(500).json({ status: "Failed", message: err.message });
                }

                // 4. Kirim respons sukses jika semua berhasil
                res.status(200).json({
                    data: null,
                    message: "User Successfully Created",
                    status: "Success"
                });
            });
        });
    });
};

const login = (req, res) => {
    let { email, password } = req.body;

    // 1. Query mencari user berdasarkan email
    let queryText = "SELECT * FROM users WHERE email = ?";

    connectionPool.query(queryText, [email], (err, users) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ status: "Failed", message: err.message });
        }

        // Ambil data user pertama hasil query (jika ada)
        const user = users[0];

        // Jika user tidak ditemukan, langsung kirim respons 401 dan stop
        if (!user) {
            return res.status(401).json({ 
                message: 'Invalid credentials',
                status: "Invalid"
            });
        }

        // 2. Jika user ada, bandingkan password menggunakan bcrypt (versi callback)
        bcrypt.compare(password, user.password, (err, isMatch) => {
            if (err) {
                console.error(err);
                return res.status(500).json({ status: "Failed", message: err.message });
            }

            // Jika password salah / tidak cocok
            if (!isMatch) {
                return res.status(401).json({ 
                    message: 'Invalid credentials',
                    status: "Invalid"
                });
            }

            // 3. Jika lolos pengecekan, buat JWT Token dan kirim respons
            const accessToken = jwt.sign({ email: user.email }, process.env.JWT_SECRET);
            
            // Mengembalikan token langsung seperti kodemu yang lama
            res.json(accessToken);
        });
    });
};



module.exports = {register, login}