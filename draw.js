// let bangundatar = "GambarKotak";
// let bangundatar = "GambarSegitiga";
// let bangundatar = "GambarSegitigaTerbalik";
// let bangundatar = "GambarSelangSeling";
let bangundatar = "GambarKotakPola";

switch(bangundatar){

    case "GambarKotak":
    function GambarKotak(panjang, lebar) {
        
        console.log("Ini adalah gambar Kotak : ");
        let hasil = '';
        for(let i = 0; i < panjang; i++){

            for(let j = 0; j < lebar; j++){

                hasil += '*';
                
            }
            hasil += '\n';
        }
        return hasil;
    }
    console.log(GambarKotak(5, 6))
    break;


    case "GambarSegitiga":
    function GambarSegitiga(tinggi) {

        console.log("Ini adalah gambar Segitiga : ");
        let hasil = '';
        for(let i = 0; i < tinggi; i++){

            for(let j = 0; j <= i; j++){

                hasil += '*';

            }
            hasil += '\n';
        }
        return hasil;
    }
    console.log(GambarSegitiga(5))
    break;


    case "GambarSegitigaTerbalik":
    function GambarSegitigaTerbalik(tinggi) {

        console.log("Ini adalah gambar Segitiga Terbalik : ");
        let hasil = '';
        for(let i = 0; i <= tinggi; i++){

            for(let j = i; j < tinggi; j++){

                hasil += '*';

            }
            hasil += '\n';
        }
        return hasil;
    }
    console.log(GambarSegitigaTerbalik(5))
    break;


    case "GambarSelangSeling":
    function GambarSelangSeling(tinggi) {

        console.log("Ini adalah gambar Selang Seling : ");
        let hasil = '';
        let nilai = 0;
        for(let i = 0; i < tinggi; i++){

            for(let j = 0; j < tinggi; j++){

                nilai ++;
                if(nilai % 2 === 0){

                    hasil += ("!");

                }else{

                    hasil += ("*");

                }
            }
            hasil += '\n';
        }
        return hasil;
    }
    console.log(GambarSelangSeling(5))
    break;


    case "GambarKotakPola":
    function GambarKotakPola(panjang, lebar) {
        
        //panjangnya boleh diubah, tapi lebarnya jangan yak, ntar ancur wkwkwkwk
        console.log("Ini adalah gambar Kotak Pola : ");
        let hasil = '';
        let nilai = 0;
        for(let i = 0; i < panjang; i++){

            for(let j = 0; j < lebar; j++){

                nilai ++;
                if(nilai === 3 || nilai === 7 || nilai % 10 === 3 || nilai % 10 === 7){

                    hasil += ("!");

                }else{

                    hasil += ("*");

                }
            }
            hasil += '\n';
        }
        return hasil;
    }
    console.log(GambarKotakPola(5, 5))
    break;


    default: console.log("Gambar yang anda cari tidak ditemukan");

}