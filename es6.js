// let nama = "John"

// if(true)
//     {
//         let nama = "Doe"
//         console.log(nama)
//     }

// console.log(nama)


// const pi = 3.14

// console.log(pi)

// // Function Lama
// function tampilkanNama(a){
//     console.log("halo, "+ a)
// }
// tampilkanNama("Huda")

// // Anonymus Function
// var tampilkanNama = function(a){
//     console.log("halo, "+ a)
// }
// tampilkanNama("huda")

// // Arrow Function
// const tampilkanNama = (a) => {
//     console.log("halo, "+ a)
// }
// tampilkanNama("Huda")



// const hitungPersegi = (sisi) =>{
//     const luas = (s) => {
//         return s * s 
//     }

//     const keliling = (s) => {
//         return 4 * s
//     }

//     console.log("Luas Persegi : ",luas(sisi))
//     console.log("Keliling Persegi : ",keliling(sisi))
// }
// n

// hitungPersegi(6)



// let nama = "Tri Agil Pribadi"
// console.log("Halo, Selamat datang.",nama)
// console.log("Halo, Selamat datang. " + nama)

// console.log("Halo, "+nama +"!. Selamat datang.")

// console.log(`Halo, ${nama}. Selamat Datang!`)

// text1 = "Halo"
// text2 = "Selamat"
// text3 = "datang"

// console.log(text1+", "+text2+" "+text3)
// console.log(`${text1}, ${text2} ${text3}`)




// Enhanced Object Literal
// let nama = "Tri Agil Pribadi"
// let person = {
//     nama : nama,
//     umur : 23
// }
// console.log(person)

// desctruring Array
let number = [6,4,7,8,5]
// let [num1, , , , lastNum] = [1,5,6,7,8]

// console.log(lastNum)

// desctruring Object
// let names = "Tri Agil Pribadi"
// let person = {
//     nama : names,
//     umur : 23,
//     tinggi : 173
// }
// let namaPerson = person.nama
// let umurPerson = person.umur
// let tinggiPerson = person.tinggi
// let {nama, umur, tinggi} = person
// console.log(nama)

// Rest Parameter Array
// let [num1, num2, num3 ,num4 , lastNum] = [1,5,6,7,8]

// let footballers = ["Messi", "Ronaldo", "Mbappe", "Halland","Neymar"]
// let [foot1,...restFoots] = footballers

// console.log(foot1)
// // console.log(foot2)
// console.log(restFoots)

// // Rest Parameter Object
// let names = "Tri Agil Pribadi"
// let person = {
//     nama : names,
//     umur : 23,
//     tinggi : 173
// }

// let {nama, ...restPerson} = person
// console.log(nama)
// console.log(restPerson)

// SPREAD OPERATOR
// let buah = ["Strawberry", "Mangga", "Apple"]
// // buah.unshift("Mangga","Jeruk")
// // buah.push("Durian")

// buah = ["Mangga", ...buah,"Jeruk"]
// console.log(buah)

let botol = {
    merk : "Aqua",
    ukuran : "600ml",
    harga : 5000
}
botol.warna = "Biru"
botol.kemasan = "Plastik"
botol.bentuk = "Bulat"

botol = {warna: "Biru", kemasan: "Plastik",...botol, bentuk: "Bulat"}
console.log(botol)
