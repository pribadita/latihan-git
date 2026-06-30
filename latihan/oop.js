// class Car {
//     constructor (brand, factory) {
//         this.brand = brand
//         this.factory = factory
//         this.sound = "Honk! Honk! Vrooommvrooommmmm"
//     }
// }

// var innova = new Car("Innova","Toyota")
// console.log(innova)

// Class - Method 1
// class Car1 {
//     constructor(brand){
//         this.carName = brand
//     }

//     present(x){
//         return `${x}, I Have a ${this.carName}`
//     }
// } 

// myCar =  new Car1("Ford")
// console.log(myCar.present("Hello"))

// Cara 1
// myCar2 = new Car1("BMW")
// console.log(myCar2.present("Hei"))

// Cara 2
// myCar = new Car1("Mercedes")
// console.log(myCar.present("Hei"))

// Cara 3
// class Car1 {
//     constructor(brand){
//         this.carName = brand
//     }

//     present(x){
//         return `${x}, I Have a ${this.carName}`
//     }
// } 

// myCar = new Car1("Ford")
// mobilku = new Car1("Toyota")

// console.log(myCar.present("Hello"))
// console.log(mobilku.present("Hei"))


// Setter Getter
// class Car{
//     constructor(brand){
//         this.brand = brand
//         this._color = ""
//     }
//     get carColor(){
//         return this._color
//     }
//     set carColor(x){
//         this._color = x
//     }
// }

// myCar = new Car("Toyota")
// myCar.carColor = "Red"
// console.log(myCar)


// Inheritance / Pewarisan

class Person{
    constructor(nama){
        this.name = nama
        this.mapel = ""
    }

    berjalan(){
        return "Prok Prok Prok"
    }
}

class School extends Person{
    constructor(nama){
        super(nama)
        this.school = ""
    }

    berjalan(){
        return "prak, Prak, Prak"
    }
}

var guru = new School("Pak Budi")
guru.mapel = "Matematika"
guru.school = "SMA Negeri 1"
console.log(guru)
console.log(guru.berjalan())


