const mahasiswa = ['Budi', 'Siti', 'Ahmad', 'Rina'];
const nilai = [85, 92, 78, 88];

console.log('=== Array Awal ===');
console.log('Mahasiswa:', mahasiswa);
console.log('Nilai :', nilai);
console.log('Jumlah mahasiswa:', mahasiswa.length);

console.log('\n=== Akses Elemen ===');
console.log('Elemen pertama :', mahasiswa[0]);
console.log('Elemen ketiga :', mahasiswa[2]);
console.log('Elemen terakhir:', mahasiswa[mahasiswa.length - 1]);

mahasiswa[1] = 'Siti Rahayu';
console.log('\nSetelah diubah:', mahasiswa);

console.log('\n=== Manipulasi Array ===');
mahasiswa.push('Doni'); 
console.log('Setelah push :', mahasiswa);

mahasiswa.unshift('Zahra');
console.log('Setelah unshift :', mahasiswa);

const dihapusAkhir = mahasiswa.pop(); 
console.log('Dihapus (pop) :', dihapusAkhir);
console.log('Setelah pop :', mahasiswa);

const dihapusAwal = mahasiswa.shift(); 
console.log('Dihapus (shift) :', dihapusAwal);
console.log('Setelah shift :', mahasiswa);

console.log('\n=== Pencarian ===');
console.log('Indeks Ahmad :', mahasiswa.indexOf('Ahmad'));
console.log('Ada Rina? :', mahasiswa.includes('Rina'));
console.log('Ada Budi? :', mahasiswa.includes('Budi'));

const sebagian = nilai.slice(1, 4); 
console.log('\nNilai asli :', nilai);
console.log('Slice [1,4] :', sebagian);

console.log('');
console.log('=== Latihan3 ===');


let daftarBelanja = ['Beras', 'Gula', 'Telur', 'Minyak', 'Garam'];

console.log("--- Daftar Belanja Awal ---");
for (let i = 0; i < daftarBelanja.length; i++) {
 
  console.log(`${i + 1}. ${daftarBelanja[i]}`);
}


daftarBelanja.push('Susu', 'Kopi');
console.log("\n(Susu dan Kopi ditambahkan ke daftar)");


let itemDihapus = daftarBelanja.shift();
console.log(`Item yang dihapus dari daftar pertama: ${itemDihapus}`);


let adaSusu = daftarBelanja.includes('Susu');
if (adaSusu) {
  console.log("Cek Susu: Ya, Susu ada di dalam daftar belanja.");
} else {
  console.log("Cek Susu: Tidak, Susu tidak ada di daftar.");
}

console.log(`Jumlah total item sekarang: ${daftarBelanja.length} item.`);

console.log("Daftar akhir:", daftarBelanja);