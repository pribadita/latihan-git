var angka = [5,1,3,2,4]
console.log(angka[3])
console.log(angka[0])
// console.log(angka)

// length
console.log(angka.length)

// push
console.log("Sebelum Push : " + angka)
angka.push(9)
console.log("Setelah Push : " + angka)

// pop
console.log("Sebelum Pop : " + angka)
angka.pop()
console.log("Setelah Pop : " + angka)

// Unshift
console.log("Sebelum Unshift : " + angka)
angka.unshift(8)
console.log("Setelah Unshift : " + angka)

// Shift
console.log("Sebelum Shift : " + angka)
angka.shift()
console.log("Setelah Shift : " + angka)

var peserta = ["Andra","Taufik","Adit","Debi"]
console.log(peserta)

// join
console.log("Sebelum Join")
console.log(peserta)
var newPeserta = peserta.join("-")
console.log("Setelah Join")
console.log(newPeserta)

// Split
var nama = "Muhammad Desta Greddy Aulia Rahman"
console.log("Sebelum Split")
console.log(nama)
console.log("Setelah di Split")
console.log(nama.split(" ").length)
var newNama = nama.split(" ")
console.log(newNama.length)

var peserta = ["Andra","Taufik","Adit","Debi"]
console.log("Sebelum Sort")
console.log(peserta)
console.log("Setelah di Sort")
console.log(peserta.sort())
console.log(peserta)
console.log("Setelah di Reverse")
console.log(peserta.reverse())
console.log(peserta)


console.log("Sebelum Slice")
console.log(peserta)
console.log("Setelah Slice")
var newPeserta = peserta.slice(0,2)
console.log(newPeserta)
console.log(peserta)

console.log("Sebelum Splice")
console.log(peserta)
console.log("Setelah Splice")
peserta.splice(1,2,"Tri")
console.log(peserta)
