// Promise
// var isMomHappy = false

// var willGetNewPhone = new Promise(
//     function(resolve, reject){
//     if(isMomHappy){
//         var phone = {
//             brand : "Iphone",
//             tipe : "16 Pro Mix Max",
//             color : "Orange"
//         }
//         resolve(phone)
//     }else{
//         var reason = new Error('Mom is not Happy!');
//         reject(reason)
//     }
// })

// function askMom(){
//     willGetNewPhone
//     .then(function(terpenuhi){
//         console.log(terpenuhi)
//     })
//     .catch(function(gagal){
//         console.log(gagal.message)
//     })
// }

// askMom()



function periksaDataPasien(nomorIdPasien){
    var dataPasien = [
        {id: 1, nama:"John", jenisKelamin:"Laki-Laki"},
        {id: 2, nama:"Michael", jenisKelamin:"Laki-Laki"},
        {id: 3, nama:"Sarah", jenisKelamin:"Perempuan"},
        {id: 4, nama:"Frank", jenisKelamin:"Laki-Laki"}
    ]
    return new Promise(function (resolve, reject){
        var pasien = dataPasien.find(x => x.id === nomorIdPasien)

        if (pasien == undefined){
            reject("Data Pasien tidak ditemukan")
        }else {
            resolve(pasien)
        }
    })
}

    // periksaDataPasien(10)
    // .then(function (data){
    //     console.log(data)
    // })
    // .catch(function(err){
    //     console.log(err.message)
    // })


async function cekPasien(id){
    try{
        var result = await periksaDataPasien(id)
        console.log(result) 
    }catch(err){
        console.log(err.message)
    }
}
cekPasien(5)

// function doAsync(){
//     return new Promise(function(resolve, reject){
//         var check = false
//         if(check){
//             resolve("Berhasil")
//         }else{
//             reject("Gagal")
//         }
//     })
// }

// async function hello() {
//     try{
//         var result = await doAsync()
//         console.log(result)
//     }catch(err){
//         console.log(err.message)
//     }
// }

// hello()