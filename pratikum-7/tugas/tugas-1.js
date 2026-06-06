// ==========================================
// 1. Struktur Data Linked List untuk Queue
// ==========================================
class Node {
  constructor(pasien) {
    this.pasien = pasien;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  // Menambahkan pasien ke belakang antrean (enqueue)
  enqueue(pasien) {
    const newNode = new Node(pasien);
    if (this.isEmpty()) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.size++;
  }

  // Mengambil pasien dari depan antrean (dequeue)
  dequeue() {
    if (this.isEmpty()) return null;
    const removedNode = this.head;
    this.head = this.head.next;
    if (!this.head) {
      this.tail = null;
    }
    this.size--;
    return removedNode.pasien;
  }

  isEmpty() {
    return this.size === 0;
  }

  // Mengembalikan list nama pasien untuk display
  getPasienList() {
    let current = this.head;
    let list = [];
    while (current) {
      list.push(`${current.pasien.nama} (${current.pasien.id})`);
      current = current.next;
    }
    return list.length > 0 ? list.join(" -> ") : "Kosong";
  }
}

// ==========================================
// 2. Class Pasien (Sesuai Soal No. 2)
// ==========================================
class Pasien {
  constructor(id, nama, prioritas) {
    this.id = id;
    this.nama = nama;
    this.prioritas = prioritas; // 'darurat' atau 'biasa'
    this.waktuDaftar = new Date().toLocaleTimeString(); // mencatat waktu daftar otomatis
  }
}

// ==========================================
// 3. Class AntrianRS (Sesuai Soal No. 3, 4, 5, 6)
// ==========================================
class AntrianRS {
  constructor() {
    // Menggunakan dua Queue terpisah
    this.antrianDarurat = new Queue();
    this.antrianBiasa = new Queue();
  }

  // Method No. 4: Masukkan ke queue sesuai prioritas
  daftar(pasien) {
    if (pasien.prioritas === "darurat") {
      this.antrianDarurat.enqueue(pasien);
      console.log(
        `[DAFTAR] Pasien Darurat: ${pasien.nama} berhasil didaftarkan.`,
      );
    } else {
      this.antrianBiasa.enqueue(pasien);
      console.log(
        `[DAFTAR] Pasien Biasa: ${pasien.nama} berhasil didaftarkan.`,
      );
    }
  }

  // Method No. 5: Layani pasien darurat dulu, baru biasa
  layani() {
    let pasienDilayani = null;

    if (!this.antrianDarurat.isEmpty()) {
      pasienDilayani = this.antrianDarurat.dequeue();
    } else if (!this.antrianBiasa.isEmpty()) {
      pasienDilayani = this.antrianBiasa.dequeue();
    } else {
      console.log("\n[LAYANAN] Tidak ada pasien di dalam antrean.");
      return;
    }

    console.log(`\n==========================================`);
    console.log(`[LAYANAN] MELAYANI PASIEN:`);
    console.log(`ID         : ${pasienDilayani.id}`);
    console.log(`Nama       : ${pasienDilayani.nama}`);
    console.log(`Prioritas  : ${pasienDilayani.prioritas.toUpperCase()}`);
    console.log(`Jam Daftar : ${pasienDilayani.waktuDaftar}`);
    console.log(`==========================================`);
  }

  // Method No. 6: Tampilkan status kedua antrean
  tampilkanAntrian() {
    console.log("\n--- STATUS ANTREAN SAAT INI ---");
    console.log(`Antrean Darurat : ${this.antrianDarurat.getPasienList()}`);
    console.log(`Antrean Biasa   : ${this.antrianBiasa.getPasienList()}`);
    console.log("--------------------------------\n");
  }
}

// ==========================================
// 4. Simulasi (Sesuai Soal No. 7)
// ==========================================
const rs = new AntrianRS();

// Generator data acak untuk 10 pasien
const namaSampel = [
  "Andi",
  "Budi",
  "Chandra",
  "Dewi",
  "Ethan",
  "Fanya",
  "Gita",
  "Hadi",
  "Indah",
  "Joko",
];
const tipePrioritas = ["darurat", "biasa"];

console.log("=== MEMULAI SIMULASI PENDAFTARAN PASIEN ACAK ===");
for (let i = 1; i <= 10; i++) {
  const nama = namaSampel[i - 1];
  const id = `PSN-${String(i).padStart(3, "0")}`;
  // Memilih prioritas secara acak
  const prioritas =
    tipePrioritas[Math.floor(Math.random() * tipePrioritas.length)];

  const pasienBaru = new Pasien(id, nama, prioritas);
  rs.daftar(pasienBaru);
}

// Tampilkan kondisi antrean setelah semua mendaftar
rs.tampilkanAntrian();

console.log("=== MEMULAI PROSES PELAYANAN PASIEN ===");
// Layani semua pasien satu per satu sampai habis
for (let i = 0; i < 10; i++) {
  rs.layani();
  rs.tampilkanAntrian(); // melihat sisa antrean secara realtime
}
