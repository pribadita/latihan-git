function countDown(number){
    console.log(number)
    var newNumber = number - 1
    if(newNumber > 0){
        countDown(newNumber)
    }
}

countDown(4)


function hitungLingkaran(radius){
    var pi = 22/7

    function luas(r){
        return pi * r * r
    }
    function keliling(r){
        return 2 * pi * r
    }

    console.log("Luas Lingkaran = ",luas(radius))
    console.log("Keliling Lingkaran = ",keliling(radius))
}

hitungLingkaran(5)


function hitungPersegi(sisi){

    function luas(s){
        return s * s
    }
    function keliling(s){
        return 4 * s
    }

    console.log("Luas Persegi : ",luas(sisi))
    console.log("Keliling Persegi : ",keliling(sisi))
}
hitungPersegi(6)

function tambah(a,b){
    return a + b
}
console.log(tambah(5,6))

function tambah(a){
    return function(b){
        return a + b
    }
}
console.log(tambah(5)(6))