// var orang = {
//     warnaKulit : "Sawo Matang",
//     jenisKelamin : "Laki-Laki",
//     tinggiBadan : 185,
//     beratBadan : 70,
//     usia : 25
// }

var orang = [
{
    nama : "Yul",
    this.warnaKulit : "Sawo Matang",
    jenisKelamin : "Perempuan",
    tinggiBadan : 185,
    beratBadan : 70,
    usia : 25
},
{
    nama : "Andra",
    warnaKulit : "Kuning Langsat",
    jenisKelamin : "Laki-Laki",
    tinggiBadan : 195,
    beratBadan : 80,
    usia : 17
}

]
// console.log(orang[1])

console.log("Menggunakan Perulangan For")
console.log("-------------------------------")


for(i=0;i < orang.length; i++){
    console.log(orang[i].warnaKulit)
}

console.log("============================")
console.log("Menggunakan Perulangan ForEach")
console.log("-------------------------------")


orang.forEach(function(item){
    console.log(item.warnaKulit)
})

var warnaKulit = orang.map(function(item){
    return item.warnaKulit
})

console.log(warnaKulit)

var filterJenisKelamin = orang.filter(function(item){
    return item.jenisKelamin == "Laki-Laki"
})

console.log(filterJenisKelamin)