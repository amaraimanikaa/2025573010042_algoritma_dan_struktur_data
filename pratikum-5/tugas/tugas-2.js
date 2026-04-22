/**
 * Tugas 2: Visualisasi Pertumbuhan Big O
 */

// 3. fn_O1(n) -> Constant Time O(1)
function fn_O1(n) {
  return n + 1;
}

// 4. fn_On(n) -> Linear Time O(n)
function fn_On(n) {
  let sum = 0;
  for (let i = 0; i < n; i++) {
    sum += i;
  }
  return sum;
}

// 5. fn_OnLogn(n) -> Linearithmic Time O(n log n)
function fn_OnLogn(n) {
  let count = 0;
  for (let i = 0; i < n; i++) {
    // Loop dalam berjalan log2(n) kali
    for (let j = 1; j < n; j *= 2) {
      count++;
    }
  }
  return count;
}

// 6. fn_On2(n) -> Quadratic Time O(n^2)
function fn_On2(n) {
  let count = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      count++;
    }
  }
  return count;
}

// 2. Function benchmarkSemua
function benchmarkSemua(ukuranData) {
  console.log("Ukuran (n) | O(1)    | O(n)    | O(n log n) | O(n^2)");
  console.log("-----------------------------------------------------------");

  ukuranData.forEach((n) => {
    // Helper untuk mengukur waktu dalam mikrosekon (lebih presisi dari ms)
    const hitungWaktu = (fn) => {
      const start = process.hrtime.bigint();
      fn(n);
      const end = process.hrtime.bigint();
      // Kembalikan dalam mikrosekon (μs)
      return Number(end - start) / 1000;
    };

    const t1 = hitungWaktu(fn_O1);
    const tn = hitungWaktu(fn_On);
    const tnLog = hitungWaktu(fn_OnLogn);
    const tn2 = hitungWaktu(fn_On2);

    console.log(
      `${n.toString().padEnd(10)} | ` +
        `${t1.toFixed(2).padEnd(7)} | ` +
        `${tn.toFixed(2).padEnd(7)} | ` +
        `${tnLog.toFixed(2).padEnd(10)} | ` +
        `${tn2.toFixed(2)} μs`,
    );
  });
}

// 7. Panggil benchmarkSemua
benchmarkSemua([100, 500, 1000, 5000, 10000]);


