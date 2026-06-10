// Poin 2: Menghitung total subarray dengan jumlah elemen = k menggunakan prefix sum + Map
function subArrayJumlahK(arr, k) {
  const map = new Map();
  map.set(0, 1); // Basis data awal: prefix sum bernilai 0 ditemukan 1 kali

  let currentSum = 0;
  let count = 0;

  for (let num of arr) {
    currentSum += num;

    // Jika selisih (currentSum - k) sudah ada di Map,
    // artinya kita telah menemukan rentang subarray yang jumlahnya tepat = k
    if (map.has(currentSum - k)) {
      count += map.get(currentSum - k);
    }

    map.set(currentSum, (map.get(currentSum) || 0) + 1);
  }
  return count;
}

// Poin 3: Mengembalikan indeks karakter pertama yang tidak berulang
function karakterPertamaUnik(s) {
  const frequencyMap = new Map();

  // Langkah 1: Hitung total kemunculan setiap karakter
  for (let char of s) {
    frequencyMap.set(char, (frequencyMap.get(char) || 0) + 1);
  }

  // Langkah 2: Scan ulang string dari depan untuk mencari frekuensi yang bernilai 1
  for (let i = 0; i < s.length; i++) {
    if (frequencyMap.get(s[i]) === 1) {
      return i;
    }
  }
  return -1;
}

// Poin 4: Mengembalikan k elemen yang paling sering muncul
function topKFrequent(arr, k) {
  const frequencyMap = new Map();

  // Hitung frekuensi tiap elemen
  for (let num of arr) {
    frequencyMap.set(num, (frequencyMap.get(num) || 0) + 1);
  }

  // Konversi objek map ke array pasangan [angka, frekuensi], lalu urutkan dari yang terbesar
  const sorted = [...frequencyMap.entries()].sort((a, b) => b[1] - a[1]);

  // Ambil sejumlah k angka teratas
  return sorted.slice(0, k).map((item) => item[0]);
}

// === PENGUJIAN TUGAS 2 ===
console.log(
  "Hasil subArrayJumlahK([1, 1, 1], 2):",
  subArrayJumlahK([1, 1, 1], 2),
); // Output: 2
console.log(
  "Hasil karakterPertamaUnik('leetcode'):",
  karakterPertamaUnik("leetcode"),
); // Output: 0
console.log(
  "Hasil topKFrequent([1, 1, 1, 2, 2, 3], 2):",
  topKFrequent([1, 1, 1, 2, 2, 3], 2),
); // Output: [1, 2]
