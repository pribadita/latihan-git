console.log("Hello Semua")
var nama = "John Doe"


var nomurUrut = 12
console.log("nama")
console.log(nama)
console.log(nomurUrut)

var hari = "jum'at"
console.log(hari)

var quote = '"Hari ini adalah hari selasa"'
console.log(quote)

var open = false
if(open == true){
    console.log("BUKA")
}

// Operator Aritmatika
var a = 5
var b = 5
var tambah = a + b
var kurang = a - b
var kali = a * b
var bagi = a / b
var modulus = a % b

console.log(tambah)
console.log(kurang)
console.log(kali)
console.log(bagi)
console.log(modulus)

// Operator Perbandingan
console.log("Operator Perbandingan")
console.log("===========================")

console.log(1 != "1")
console.log(1 !== "1")
console.log(1 > 1)


// Operator Kodisional
console.log("Operator Kodisional")
console.log("===========================")

// &&(AND) ||(OR)
// console.log(false || false)
var status = "open"
var jamBuka = 9

console.log(status == "open" || jamBuka >= 8)

// Operator STRING
console.log("STRING")
console.log("===========================")

var word = "Web Programming"
var word1 = "Web"
var word2 = "Programming"
var tahun = 2025
console.log(word)
console.log(word.length)
console.log(word.charAt(1))

console.log(`${word1} ${word2}, tahun ${tahun}`)

var word3 = word.substring(3)
console.log(word.toUpperCase())
console.log(word.toLowerCase())

console.log(word.trim())
console.log(word.replace('r','R'))
console.log(word.replaceAll('r','R'))

console.log("===========================")
console.log("Mengubah menjadi String")
// Mengubah menjadi String
// 1.   String(namaVariable)
// 2.   .toString

var angka = 10
console.log(angka)
console.log(angka+angka)

console.log(String(angka))
console.log(angka.toString())

var angka = angka.toString()

console.log(angka)
console.log(angka+angka)


console.log("===========================")
console.log("Mengubah jadi Angka/NUmber")
// Mengubah jadi Angka/NUmber
// 1.   parsetInt(namaVariable)
// 2.   Number(namavariable)

var kata = "7"
console.log(kata)

console.log(Number(kata))
console.log(parseInt(kata))

var angka1 = 1.5
var angka2 = 2

console.log(angka1)
console.log(angka2)

var angka3 = angka1 + angka2
console.log(angka3)


