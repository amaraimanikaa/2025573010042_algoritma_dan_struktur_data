/**
 * Latihan 1: Identifikasi Kompleksitas
 */

// 8. Helper function untuk menghitung waktu eksekusi
function hitungKompleksitas(n, fn, inputTambahan = null) {
  const mulai = Date.now();
  fn(n, inputTambahan);
  const selesai = Date.now();
  console.log(`Waktu eksekusi: ${selesai - mulai}ms`);
}

// --- FUNGSI-FUNGSI LATIHAN ---

// 3. Fungsi A
// Big O: O(1) - Constant Time
// Alasan: Operasi perkalian dilakukan tepat satu kali, tidak peduli seberapa besar nilai n.
function fungsiA(n) {
  return n * 2;
}

// 4. Fungsi B
// Big O: O(n^2) - Quadratic Time
// Alasan: Terdapat nested loop (loop di dalam loop). Loop luar berjalan n kali
// dan loop dalam juga berjalan n kali, sehingga total operasinya adalah n * n.
function fungsiB(n) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      // console.log(i, j); // Dimatikan agar tidak memenuhi terminal
    }
  }
}

// 5. Fungsi C
// Big O: O(log n) - Logarithmic Time
// Alasan: Variabel i dilipatgandakan (i *= 2) pada setiap iterasi.
// Jumlah langkah yang dibutuhkan untuk mencapai n tumbuh secara logaritmik.
function fungsiC(n) {
  for (let i = 1; i < n; i *= 2) {
    // console.log(i);
  }
}

// 6. Fungsi D
// Big O: O(n^3) - Cubic Time
// Alasan: Terdapat tiga lapis perulangan (forEach di dalam forEach di dalam forEach).
// Jika panjang array adalah n, maka total operasinya adalah n * n * n.
function fungsiD(n, arr) {
  arr.forEach((x) => {
    arr.forEach((y) => {
      arr.forEach((z) => {
        // console.log(x, y, z);
      });
    });
  });
}

// --- 7. IMPLEMENTASI & PENGUJIAN (n = 1000) ---

const n = 1000;
const dummyArray = new Array(n).fill(0); // Digunakan untuk Fungsi D

console.log("Menguji Fungsi A (O(1)):");
hitungKompleksitas(n, fungsiA);

console.log("\nMenguji Fungsi B (O(n^2)):");
hitungKompleksitas(n, fungsiB);

console.log("\nMenguji Fungsi C (O(log n)):");
hitungKompleksitas(n, fungsiC);

console.log("\nMenguji Fungsi D (O(n^3)):");
// Catatan: O(n^3) dengan n=1000 berarti 1 miliar operasi.
// Ini mungkin memakan waktu beberapa detik tergantung spek komputer Anda.
hitungKompleksitas(n, () => fungsiD(n, dummyArray));
