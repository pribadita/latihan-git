// if (true){
//     console.log("Kode Program dijalankan")
// }

// if (false) {
//         console.log("Kode Program tidak dijalankan")
// }

// var mood = "happy"
// if (mood == "bahagia"){
//     console.log("Saya sedang Bahagia Hari ini")
// }

// var angka = 1
// if (angka == "1"){
//     console.log("Muncul Angka 1")
// }


// var mood = "happy"
// if (mood == "happy"){
//     console.log("Saya sedang Bahagia Hari ini")
// }else{
//     console.log("Saya sedang tidak baik-baik saja")
// }

// var mood = "sedih"
// if (mood == "happy"){
//     console.log("Saya sedang Bahagia Hari ini")
// }else if(mood == "marah"){
//     console.log("Saya sedang marah hari ini")
// }else{
//     console.log("Saya sedang tidak baik-baik saja")
// }

// var miniMarketStatus = "open"
// var telur = "sold"
// var buah = "sold"

// if(miniMarketStatus == "open"){
//     console.log("saya akan membeli talur dan buah")
//     if (telur == "sold" && buah == "sold"){
//         console.log("Belanjaan Saya tidak tersedia")
//     } else if(telur == "ready" && buah == "sold"){
//         console.log("Buah Tersedia, Telur Habis")
//     } else if(telur == "sold" && buah == "ready"){
//         console.log("Buah Habis, Telur Tersedia")
//     }
// }else{
//     console.log("Toko tutup, Saya pulang lagi")
// }

// var umur = 35

// if(umur >= 17){
//     console.log("Sudah Memiliki KTP")
//     if(umur > 20){
//         console.log("Umur Kurang dari 20 Tahun")
//     }else if(umur > 30){
//         console.log("usia antara 20-30 Tahun")
//     }else if (umur > 40){
//         console.log("usia antara 30-40 Tahun")
//     }else {
//         console.log("Sudah berumur")
//     }
// }else{
//     console.log("Belum Memiliki KTP")
// }

// var warna = 5

// switch(warna){
//     case 1 : {
//         console.log("Warna Merah")
//         break
//     }
//     case 2 : {
//         console.log("Warna Biru")
//         break
//     }
//     case 3 : {
//         console.log("Warna Kuning")
//         break
//     }
//     case 4 : {
//         console.log("Warna Hijau")
//         break
//     }
//     default : {
//         console.log("Warna yang anda pilih tidak ada")
//     }
// }

for(angka = 1; angka <= 10;angka++){
    console.log("Iterasi ke : " + angka)
}


var jumlah =0
for (deret = 5;deret > 0;deret--){
    jumlah += deret
    console.log("jumlah saat ini "+ jumlah)
}

console.log("jumlah terakhir :" + jumlah)

var flag = 1
while(flag < 10){
    console.log("Iterasi While ke : "+ flag)
    flag++
}

var flags = 1
do{
    console.log("Iterasi Do-While ke : "+ flags)
    flags++
}
while(flags < 10)

    

for(angka = 2; angka <= 10;angka++){
    console.log("Iterasi For ke : " + angka)
    angka+=1
}


var flag = 2
while(flag <= 10){
    console.log("Iterasi While ke : "+ flag)
    flag+=2
}
