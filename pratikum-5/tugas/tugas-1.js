/**
 * Tugas 1: Analisis dan Refactor
 */

// Helper untuk mengukur waktu
function measure(label, fn) {
  const start = Date.now();
  const result = fn();
  const end = Date.now();
  console.log(`${label}: ${end - start}ms`);
  return result;
}

// ==========================================
// 3. FUNGSI A: Intersection (Irisan Dua Array)
// ==========================================

// Versi O(n^2) - Time: O(n*m), Space: O(min(n,m))
function intersectionSlow(arr1, arr2) {
  return arr1.filter((item) => arr2.includes(item));
}

// Versi O(n) - Time: O(n+m), Space: O(n)
function intersectionFast(arr1, arr2) {
  const set1 = new Set(arr1);
  return arr2.filter((item) => set1.has(item));
}

// ==========================================
// 4. FUNGSI B: Group Anagrams
// ==========================================

// Time: O(n * k log k) di mana n adalah jumlah kata, k panjang kata terpanjang
// Space: O(n * k)
function groupAnagrams(strs) {
  const map = {};
  for (let s of strs) {
    // Sortir kata untuk dijadikan key (contoh: 'eat' -> 'aet')
    const key = s.split("").sort().join("");
    if (!map[key]) map[key] = [];
    map[key].push(s);
  }
  return Object.values(map);
}

// ==========================================
// 5. FUNGSI C: Two Sum Square (a + b = c^2)
// ==========================================

// Versi O(n^3) - Triple Nested Loop
function isSquareSumSlow(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      for (let k = 0; k < arr.length; k++) {
        if (arr[i] + arr[j] === Math.pow(arr[k], 2)) return true;
      }
    }
  }
  return false;
}

// Versi O(n log n) - Sorting + Two Pointers
function isSquareSumFast(arr) {
  arr.sort((a, b) => a - b); // O(n log n)
  const squares = arr.map((x) => x * x); // Simpan kuadrat agar hemat hitung

  for (let target of squares) {
    let left = 0;
    let right = arr.length - 1;
    while (left < right) {
      const sum = arr[left] + arr[right];
      if (sum === target) return true;
      if (sum < target) left++;
      else right--;
    }
  }
  return false;
}

// ==========================================
// 6. PENGUJIAN DENGAN DATA BESAR
// ==========================================

const bigData1 = Array.from({ length: 30000 }, (_, i) => i);
const bigData2 = Array.from({ length: 30000 }, (_, i) => i + 15000);

console.log("--- Uji Fungsi A (Intersection) ---");
measure("Intersection O(n^2)", () => intersectionSlow(bigData1, bigData2));
measure("Intersection O(n)", () => intersectionFast(bigData1, bigData2));

console.log("\n--- Uji Fungsi B (Anagram) ---");
const words = ["eat", "tea", "tan", "ate", "nat", "bat"];
console.log("Hasil:", JSON.stringify(groupAnagrams(words)));

console.log("\n--- Uji Fungsi C (Two Sum Square) ---");
const bigNumbers = Array.from({ length: 2000 }, () =>
  Math.floor(Math.random() * 1000),
);
// O(n^3) dengan 2000 data mungkin sangat lama, kita coba ukur
measure("Square Sum O(n^3)", () => isSquareSumSlow(bigNumbers));
measure("Square Sum O(n log n)", () => isSquareSumFast(bigNumbers));
