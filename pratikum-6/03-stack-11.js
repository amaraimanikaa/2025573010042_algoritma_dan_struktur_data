// 1. Definisikan Node untuk Linked List
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

// 2. Definisikan class LinkedList internal
class LinkedList {
  constructor() {
    this.head = null;
    this.count = 0;
  }

  // Menambah data di depan (Head) -> O(1)
  prepend(data) {
    const newNode = new Node(data);
    newNode.next = this.head;
    this.head = newNode;
    this.count++;
  }

  // Menghapus data dari depan (Head) -> O(1)
  removeHead() {
    if (!this.head) return null;

    const removedData = this.head.data;
    this.head = this.head.next;
    this.count--;
    return removedData;
  }

  // Melihat data di paling depan (Head) -> O(1)
  getHead() {
    return this.head ? this.head.data : null;
  }

  // Mengecek apakah list kosong
  isEmpty() {
    return this.count === 0;
  }

  // Mendapatkan ukuran list
  size() {
    return this.count;
  }

  // Mencetak semua data di list
  print() {
    let current = this.head;
    let result = [];
    while (current) {
      result.push(current.data);
      current = current.next;
    }
    console.log(result.join(" -> "));
  }
}

// 3. Implementasikan class Stack menggunakan Komposisi (bukan extends)
class Stack {
  constructor() {
    // Menggunakan LinkedList sebagai penyimpanan internal
    this.storage = new LinkedList();
  }

  // Menambahkan data ke dalam stack
  push(data) {
    this.storage.prepend(data);
  }

  // Mengambil dan menghapus data teratas dari stack
  pop() {
    if (this.isEmpty()) {
      console.log("Stack Underflow! Tidak ada data untuk di-pop.");
      return null;
    }
    return this.storage.removeHead();
  }

  // Mengintip data teratas tanpa menghapusnya
  peek() {
    return this.storage.getHead();
  }

  // Mengecek apakah stack kosong
  isEmpty() {
    return this.storage.isEmpty();
  }

  // Mendapatkan ukuran/jumlah elemen di stack
  size() {
    return this.storage.size();
  }

  // Menampilkan isi stack saat ini
  print() {
    this.storage.print();
  }
}

// =================================================================
// 5. Demonstrasi Simulasi Undo/Redo Sederhana
// =================================================================

console.log("=== Memulai Simulasi Undo/Redo ===");

// Array aksi (history aktivitas pengguna)
const actions = [
  "Ketik: 'Halo '",
  "Ketik: 'Halo Dunia'",
  "Format: Tebal (Bold)",
  "Ganti Warna: Merah",
];

const undoStack = new Stack();

// Simulasi melakukan aksi (Push ke Stack)
console.log("\n--- Pengguna melakukan beberapa aksi ---");
actions.forEach((action) => {
  console.log(`Melakukan aksi: [${action}]`);
  undoStack.push(action);
});

console.log("\nIsi Stack saat ini (atas -> bawah):");
undoStack.print();

// Simulasi Undo (Pop dari Stack)
console.log("\n--- Pengguna menekan tombol UNDO (3 kali) ---");

console.log(`[UNDO] Membatalkan: ${undoStack.pop()}`);
console.log(`[UNDO] Membatalkan: ${undoStack.pop()}`);

console.log(`\nData teratas saat ini (peek): ${undoStack.peek()}`);
console.log(`Jumlah aksi tersisa di stack: ${undoStack.size()}`);

console.log(`[UNDO] Membatalkan: ${undoStack.pop()}`);

console.log("\nIsi Stack akhir setelah beberapa kali undo:");
undoStack.print();
