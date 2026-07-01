const express = require('express');
const app = express();
const port = 3000;

let mahasiswa = ["Yul","Desta","Andra","Huda"]
let objectMahasiswa = [
  {
    nim :1112,
    nama : "Yulita" 
  },
  {nim :1113, nama:"Muhammad Desta Gredy"},
  {nim :1114, nama: "Andra Ramadhani"},
  {nim :1115, nama:"Ayudha Kusuma"}
]

const getObjectMahasiswa = (req, res) => {
  let {nama} = req.query
  let result = ""
  
  if(nama==undefined){
    nama=""
  }

  objectMahasiswa.forEach((item,index) => {
    if(item.nama.toLowerCase().includes(nama.toLowerCase())){
      result += `<H1> ${index+1}. <br> NIM : ${item.nim} <br> NAMA : ${item.nama} </H1>` 
    }
  })
  if(!result){
    res.send("Data Tidak Ditemukan")
  }

    res.send(result);
}

const getMahasiswa =  (req, res) => {
  let result = ""
  mahasiswa.forEach(function(item,index){
    result += `<H1>${index+1}. ${item}</H1>`
  })

  res.send(result);
}

const getObjectMahasiswabyNim = (req, res) => {
    // let nim = req.params.nim
    let {nim} = req.params;
    let hasil = objectMahasiswa.find((item) => {
      return item.nim === Number(nim)
    })
    res.send(`${hasil.nama}`)
}

app.get('/', (req, res) => {
  res.send('Hello, Nama Saya Tri Agil Pribadi!');
});

app.get('/mahasiswa', getMahasiswa);
app.get('/objectmahasiswa', getObjectMahasiswa)
app.get('/objectmahasiswa/:nim', getObjectMahasiswabyNim)


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});