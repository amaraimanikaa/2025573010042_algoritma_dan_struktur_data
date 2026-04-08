function kuadratBiasa(x) {
    return x * x;
}

const kuadrat = (x) => {
    return x * x;
};

const kuadratRingkas = x => x * x;

console.log('=== Perbandingan Penulisan ===');
console.log('Biasa  :', kuadratBiasa(5));
console.log('Arrow  :', kuadrat(5));
console.log('Ringkas:', kuadratRingkas(5));

const luas = (panjang, lebar) => panjang * lebar;
const salam = (nama, waktu) => `Selamat ${waktu}, ${nama}`;

console.log('Luas 4x6 :', luas(4, 6));
console.log(salam('Budi', 'Pagi'));

function lakukanOperasi(angka, operasiCallback) {
    console.log(`Angka awal: ${angka}`);
    const hasil = operasiCallback(angka);
    console.log(`Hasil setelah operasi: ${hasil}`);
}

console.log('\n=== callback ===');
lakukanOperasi(7, kuadratRingkas);
lakukanOperasi(10, x => x + 100);
lakukanOperasi(20, function(x) {
    return x / 2;
});

console.log('\n=== setTimeout (Callback) ===');
console.log('Pesan 1: Sebelum timer');

setTimeout(() => {
    console.log('Pesan 3: Ini dari dalam setTimeout (setelah 1 detik)');
}, 100);

console.log('Pesan 2: Setelah mendaftarkan timer');

console.log('');
console.log('=== Latihan2 ===');


const keHurufBesar = (str) => str.toUpperCase();

const tambahSeru = (str) => str + "!!!";

const hitungKata = (str) => str.split(' ').length;


function prosesKalimat(kalimat, transformasiCallback) {
  const hasil = transformasiCallback(kalimat);
  
  console.log("Hasil transformasi:", hasil);
}


const teks = 'belajar javascript itu menyenangkan';

console.log("--- Menguji keHurufBesar ---");
prosesKalimat(teks, keHurufBesar);

console.log("\n--- Menguji tambahSeru ---");
prosesKalimat(teks, tambahSeru);

console.log("\n--- Menguji hitungKata ---");
prosesKalimat(teks, hitungKata);