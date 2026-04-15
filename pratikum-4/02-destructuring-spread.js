const produk = {
    nama    : 'Laptop Gaming',
    merk    : 'TechBrand',
    harga   : 12500000,
    stok    : 15,
    garansi : '1 tahun',
};

const { nama, harga, stok } = produk;

console.log('=== Object Destructuring ===');
console.log(`${nama} | Rp${harga.toLocaleString()} | Stok: ${stok}`);

const { nama: namaProduk, garansi: periodeGaransi } = produk;
console.log(`Produk: ${namaProduk}, Garansi: ${periodeGaransi}`);

const { warna = 'Tidak diketahui', stok: jumlahStok = 0 } = produk;
console.log(`Warna: ${warna} | Stok: ${jumlahStok}`);

const koordinat = [10, 25, 5];
const [x, y, z] = koordinat;
console.log('\n=== Array Destructuring ===');
console.log(`x=${x}, y=${y}, z=${z}`);

const [, kedua, ,] = [100, 200, 300, 400];
console.log('Elemen kedua:', kedua); //200

let a = 'pertama', b = 'kedua';
console.log('Sebelum swap:', a, b);
[a, b] = [b, a];
console.log('Setelah swap:', a, b);

const buah  = ['Apel', 'Mangga', 'Jeruk'];
const sayur = ['Bayam', 'Wortel'];

const salinanBuah = [...buah];
salinanBuah.push('Pisang');

console.log('\n=== Spread Operator ===');
console.log('Asli   :', buah); //tidak berubah
console.log('Salinan:', salinanBuah);

const profil = {nama: 'Siti', umur: 22, kota: 'Jakarta' };
const profilUpdate = {...profil, kota: 'Bandung', pekerjaan: 'Developer '};

console.log('Profil asli :', profil);
console.log('Profil update :', profilUpdate);

function jumlahkanSemua(...angka) {
    console.log('Argumen diterima:', angka); // angka adalah array
    return angka.reduce((total, n) => total + n, 0);
}

console.log('\n=== Rest Parameter ===');
console.log('Total:', jumlahkanSemua(1, 2, 3));
console.log('Total:', jumlahkanSemua(10, 20, 30, 40, 50));

const [kepala,...ekor] = [1, 2, 3, 4, 5];
console.log('Kepala:', kepala); // 1
console.log('Ekor :', ekor); // [2, 3, 4, 5]


console.log('');
console.log('=== Latihan2 ===');

const timA = ['Budi', 'Siti', 'Ahmad'];
const timB = ['Rina', 'Doni'];

const timGabungan = [...timA, ...timB, 'Zahra'];

console.log("Tim Gabungan:", timGabungan);

const [kapten, ...anggota] = timGabungan;

console.log("Kapten:", kapten); // Output: Budi
console.log("Anggota:", anggota); // Sisanya dalam bentuk array

const pengaturanDefault = { 
  tema: 'terang', 
  bahasa: 'id', 
  notifikasi: true, 
  fontSize: 14 
};

const pengaturanUser = {
  ...pengaturanDefault,
  tema: 'gelap',
  fontSize: 16
};

console.log("Pengaturan User:", pengaturanUser);

const { tema, fontSize } = pengaturanUser;

console.log("Tema Saat Ini:", tema);
console.log("Ukuran Font:", fontSize);