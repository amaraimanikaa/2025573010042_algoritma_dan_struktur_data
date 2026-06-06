// ==========================================
// Struktur Data Node dan Stack (Dasar Linked List)
// ==========================================
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
  }

  // Operasi Push - Big O: O(1)
  push(value) {
    const newNode = new Node(value);
    newNode.next = this.top;
    this.top = newNode;
  }

  // Operasi Pop - Big O: O(1)
  pop() {
    if (this.isEmpty()) return null;
    const poppedValue = this.top.value;
    this.top = this.top.next;
    return poppedValue;
  }

  // Operasi Peek (Melihat elemen teratas) - Big O: O(1)
  peek() {
    if (this.isEmpty()) return null;
    return this.top.value;
  }

  // Cek Kosong - Big O: O(1)
  isEmpty() {
    return this.top === null;
  }
}

// ==========================================
// Implementasi Class MinStack (Sesuai Soal No. 2 & 3)
// ==========================================
class MinStack {
  constructor() {
    this.dataStack = new Stack(); // Stack utama untuk menyimpan semua data biasa
    this.minStack = new Stack(); // Stack pembantu khusus menyimpan nilai minimum saat ini
  }

  /**
   * Menambahkan elemen baru ke dalam stack.
   * Sesuai hint: jika nilai baru <= minimum saat ini, push juga ke stack min.
   * Big O: O(1)
   */
  push(val) {
    this.dataStack.push(val);

    // Jika minStack kosong ATAU nilai baru lebih kecil/sama dengan nilai teratas minStack
    if (this.minStack.isEmpty() || val <= this.minStack.peek()) {
      this.minStack.push(val);
    }
    console.log(`Push(${val}) ke dalam Stack`);
  }

  /**
   * Menghapus elemen teratas dari stack.
   * Jika elemen yang dihapus sama dengan nilai minimum saat ini, hapus juga dari minStack.
   * Big O: O(1)
   */
  pop() {
    if (this.dataStack.isEmpty()) {
      console.log("Stack kosong, tidak bisa melakukan pop().");
      return null;
    }

    const poppedValue = this.dataStack.pop();

    // Jika nilai yang keluar dari dataStack adalah nilai minimum saat ini
    if (poppedValue === this.minStack.peek()) {
      this.minStack.pop();
    }
    console.log(`Pop() dilakukan -> Elemen keluar: ${poppedValue}`);
    return poppedValue;
  }

  /**
   * Mengembalikan elemen teratas tanpa menghapusnya.
   * Big O: O(1)
   */
  top() {
    return this.dataStack.peek();
  }

  /**
   * Mengembalikan elemen terkecil saat ini dalam waktu O(1).
   * Sesuai Soal No. 2: Bukan O(n).
   * Big O: O(1)
   */
  getMin() {
    if (this.minStack.isEmpty()) {
      return null;
    }
    return this.minStack.peek();
  }
}

// ==========================================
// Eksekusi Uji Coba Sesuai Kasus Soal No. 4
// Skenario: push(5), push(3), push(7), push(2) -> getMin()=2, pop(), getMin()=3, pop(), getMin()=3.
// ==========================================
const minStack = new MinStack();

console.log("=== MEMULAI UJI COBA MIN STACK ===\n");

// 1. Serangkaian operasi push
minStack.push(5);
minStack.push(3);
minStack.push(7);
minStack.push(2);

// 2. Cek nilai minimum awal (Harus bernilai 2)
console.log(`--> getMin() saat ini = ${minStack.getMin()}`); // Ekspektasi: 2

// 3. Lakukan operasi pop pertama (Mengeluarkan angka 2)
minStack.pop();

// 4. Cek nilai minimum setelah pop pertama (Harus bernilai 3)
console.log(`--> getMin() saat ini = ${minStack.getMin()}`); // Ekspektasi: 3

// 5. Lakukan operasi pop kedua (Mengeluarkan angka 7)
minStack.pop();

// 6. Cek nilai minimum setelah pop kedua (Harus tetap bernilai 3)
console.log(`--> getMin() saat ini = ${minStack.getMin()}`); // Ekspektasi: 3

console.log("\n=== UJI COBA SELESAI ===");
