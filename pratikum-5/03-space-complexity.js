function jumlahArray(arr) {
  let total = 0; // hanya 1 variabel tambahan
  for (const x of arr) total += x;
  return total;
}

function duplikasiArray(arr) {
  const baru = []; // array baru tumbuh seiring arr
  for (const x of arr) baru.push(x * 2);
  return baru;
}

function faktorialRekursif(n) {
  if (n <= 1) return 1;
  return n * faktorialRekursif(n - 1); // n frame di call stack
}

function faktorialIteratif(n) {
  let hasil = 1;
  for (let i = 2; i <= n; i++) hasil *= i; // hanya 2 variabel
  return hasil;
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log("Jumlah array :", jumlahArray(arr)); // O(1) space
console.log("Duplikasi array:", duplikasiArray(arr)); // O(n) space
console.log("Faktorial 10 rekursif :", faktorialRekursif(10));
console.log("Faktorial 10 iteratif :", faktorialIteratif(10));

function hitungUnik(arr) {
  const seen = new Set(); // Set tumbuh hingga n elemen
  for (const x of arr) seen.add(x);
  return seen.size;
}

const dataAcak = [1, 2, 3, 2, 1, 4, 5, 3, 6, 4, 7];
console.log("Elemen unik:", hitungUnik(dataAcak)); // 7

console.log("");
console.log("=== latihan2 ===");

/**
 * Latihan 3: Class BankAccount (Mencari Pasangan Angka)
 */

// 2a. Mencari pasangan dengan Nested Loop
// Time Complexity: O(n^2) - Karena ada loop di dalam loop.
// Space Complexity: O(1) - Tidak menggunakan memori tambahan yang bergantung pada input.
function cariPasanganLambat(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) {
        return [arr[i], arr[j]];
      }
    }
  }
  return null;
}

// 2b. Mencari pasangan dengan Set
// Time Complexity: O(n) - Hanya melakukan satu kali iterasi pada array.
// Space Complexity: O(n) - Menggunakan Set untuk menyimpan angka yang sudah dilihat.
function cariPasanganCepat(arr, target) {
  const angkaDilihat = new Set();
  for (let angka of arr) {
    let selisih = target - angka;
    if (angkaDilihat.has(selisih)) {
      return [selisih, angka];
    }
    angkaDilihat.add(angka);
  }
  return null;
}

// 3. Uji fungsi dengan target 9
const testArray = [2, 7, 11, 15];
const targetUji = 9;

console.log("--- Uji Coba Sederhana ---");
console.log("Hasil Lambat:", cariPasanganLambat(testArray, targetUji)); // [2, 7]
console.log("Hasil Cepat:", cariPasanganCepat(testArray, targetUji)); // [2, 7]

// 4. Pengukuran Waktu dengan 50.000 data acak
console.log("\n--- Pengukuran Waktu (50.000 Data) ---");

const dataBesar = Array.from({ length: 50000 }, () =>
  Math.floor(Math.random() * 100000),
);
const targetTidakAda = -1; // Target yang pasti tidak ada agar loop berjalan maksimal

// Ukur Fungsi Lambat
const mulaiLambat = Date.now();
cariPasanganLambat(dataBesar, targetTidakAda);
const selesaiLambat = Date.now();
console.log(`Waktu cariPasanganLambat: ${selesaiLambat - mulaiLambat}ms`);

// Ukur Fungsi Cepat
const mulaiCepat = Date.now();
cariPasanganCepat(dataBesar, targetTidakAda);
const selesaiCepat = Date.now();
console.log(`Waktu cariPasanganCepat: ${selesaiCepat - mulaiCepat}ms`);
