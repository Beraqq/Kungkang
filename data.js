const nama = "Muhamad Abdan Syakur";
let usia = 13;

let biodata = document.getElementById('biodata');

function generaterBiodata(){
    let generasi;

    if (usia > 12 && usia < 18){
        generasi = "Remaja";
    } else if (usia > 18 && usia < 35){
        generasi = "Dewasa";
    } else {
        generasi = "Naon Anying"
    }

    return biodata.innerHTML = generasi;
}

console.log(nama);
console.log(usia);

generaterBiodata();