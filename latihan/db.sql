create table mahasiswa(
    nim INT(10) PRIMARY KEY,
    nama CHAR(255) NOT NULL,
    prodi CHAR(255) NOT NULL,
    jenisKelamin ENUM('Laki-Laki','Perempuan'),
    alamat TEXT NOT NULL,
    noHp CHAR(25)
);

INSERT INTO mahasiswa()
VALUES (123457, "Pribadi", "TIK", "Laki-Laki","Samarinda","0987654321");

INSERT INTO mahasiswa()
VALUES ()

UPDATE mahasiswa
SET alamat = "Balikpapan"
WHERE nim=12345;