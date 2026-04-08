const dataMahasiswa = [
  { nama: "Desty", nilai: 85 },
  { nama: "Siti", nilai: 92 },
  { nama: "Fika", nilai: 58 },
  { nama: "Dilla", nilai: 70 },
  { nama: "Budi", nilai: 45 },
  { nama: "Bilqis", nilai: 80 }
];

function hitungStatistik(arrMahasiswa) {
  const hasilReduce = arrMahasiswa.reduce((acc, mhs) => {
    return {
      total: acc.total + 1,
      jumlahNilai: acc.jumlahNilai + mhs.nilai,
      tertua: Math.max(acc.tertua, mhs.nilai), 
      terendah: Math.min(acc.terendah, mhs.nilai)
    };
  }, { total: 0, jumlahNilai: 0, tertua: -Infinity, terendah: Infinity });

  return {
    total: hasilReduce.total,
    rataRata: (hasilReduce.jumlahNilai / hasilReduce.total).toFixed(2),
    tertinggi: hasilReduce.tertua,
    terendah: hasilReduce.terendah
  };
}

function filterLulus(arrMahasiswa, batasLulus) {
  return arrMahasiswa.filter(mhs => mhs.nilai >= batasLulus);
}

function tambahGrade(arrMahasiswa) {
  return arrMahasiswa.map(mhs => {
    let grade;
    if (mhs.nilai >= 85) grade = 'A';
    else if (mhs.nilai >= 75) grade = 'B';
    else if (mhs.nilai >= 65) grade = 'C';
    else if (mhs.nilai >= 50) grade = 'D';
    else grade = 'E';

    return { ...mhs, grade: grade };
  });
}

console.log("=== LAPORAN NILAI MAHASISWA ===");

const stats = hitungStatistik(dataMahasiswa);
console.log(`
--- Statistik Grup ---
Total Mahasiswa : ${stats.total}
Rata-rata Nilai : ${stats.rataRata}
Nilai Tertinggi : ${stats.tertinggi}
Nilai Terendah  : ${stats.terendah}
`);

const daftarLulus = filterLulus(dataMahasiswa, 65);
console.log("--- Mahasiswa yang Lulus (Batas 65) ---");
daftarLulus.forEach(mhs => {
  console.log(`> ${mhs.nama} dinyatakan LULUS dengan nilai ${mhs.nilai}`);
});

const dataFinal = tambahGrade(dataMahasiswa);
console.log("\n--- Daftar Lengkap dengan Grade ---");
dataFinal.forEach((mhs, index) => {
  console.log(`${index + 1}. Nama: ${mhs.nama.padEnd(8)} | Nilai: ${mhs.nilai} | Grade: ${mhs.grade}`);
});