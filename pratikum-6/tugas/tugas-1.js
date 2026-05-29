// 2. Implementasi Node dengan pointer next dan prev
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
    this.prev = null;
  }
}

// Implementasi class DoublyLinkedList
class DoublyLinkedList {
  constructor() {
    this.head = null;
    // 4. Menambahkan properti tail untuk akses O(1) ke node terakhir
    this.tail = null;
    this.length = 0;
  }

  // 5. Menambahkan elemen di akhir list
  // Bukti O(1): Kita langsung mengakses `this.tail` tanpa perlu melakukan looping searching dari head.
  // Big O: O(1)
  append(data) {
    const newNode = new Node(data);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
  }

  // Menambahkan elemen di awal list
  // Big O: O(1)
  prepend(data) {
    const newNode = new Node(data);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }
    this.length++;
  }

  // Menyisipkan elemen pada indeks tertentu
  // Big O: O(n) - Karena kita harus melakukan traversal (looping) untuk mencari indeks target
  insertAt(index, data) {
    if (index < 0 || index > this.length) return false;

    if (index === 0) {
      this.prepend(data);
      return true;
    }
    if (index === this.length) {
      this.append(data);
      return true;
    }

    const newNode = new Node(data);
    let current = this.head;

    // Cari node pada posisi indeks saat ini
    for (let i = 0; i < index; i++) {
      current = current.next;
    }

    // Atur pointer untuk menyelipkan node baru
    newNode.prev = current.prev;
    newNode.next = current;
    current.prev.next = newNode;
    current.prev = newNode;

    this.length++;
    return true;
  }

  // Menghapus elemen berdasarkan data/nilai
  // Big O: O(n) - Karena membutuhkan pencarian data di dalam list terlebih dahulu
  delete(data) {
    if (!this.head) return null;

    let current = this.head;

    // Cari node yang memiliki data yang dicari
    while (current && current.data !== data) {
      current = current.next;
    }

    // Jika data tidak ditemukan
    if (!current) return null;

    // Jika node yang dihapus adalah HEAD
    if (current === this.head) {
      this.head = current.next;
      if (this.head) this.head.prev = null;
      else this.tail = null; // List menjadi kosong
    }
    // Jika node yang dihapus adalah TAIL
    else if (current === this.tail) {
      this.tail = current.prev;
      this.tail.next = null;
    }
    // Jika node berada di tengah-tengah
    else {
      current.prev.next = current.next;
      current.next.prev = current.prev;
    }

    this.length--;
    return current.data;
  }

  // Membalik urutan seluruh elemen di dalam list
  // Big O: O(n) - Karena harus menukar pointer `next` dan `prev` di setiap node
  reverse() {
    if (!this.head) return;

    let current = this.head;
    let temp = null;

    // Tukar pointer next dan prev untuk setiap node
    while (current) {
      temp = current.prev;
      current.prev = current.next;
      current.next = temp;
      current = current.prev; // Berpindah ke node "setelahnya" (yang sekarang ada di pointer prev)
    }

    // Tukar posisi head dan tail awal
    if (temp !== null) {
      this.tail = this.head;
      this.head = temp.prev;
    }
  }

  // 3. Mencetak list dari depan (menggunakan head) dan dari belakang (menggunakan tail)
  // Big O: O(n) - Melakukan penelusuran sepanjang jumlah data (n)
  print() {
    // Cetak dari depan ke belakang
    let currentForward = this.head;
    let forwardResult = [];
    while (currentForward) {
      forwardResult.push(currentForward.data);
      currentForward = currentForward.next;
    }
    console.log("Dari Depan (Head -> Tail)  : " + forwardResult.join(" <-> "));

    // Cetak dari belakang ke depan memanfaatkan pointer tail
    let currentBackward = this.tail;
    let backwardResult = [];
    while (currentBackward) {
      backwardResult.push(currentBackward.data);
      currentBackward = currentBackward.prev;
    }
    console.log(
      "Dari Belakang (Tail -> Head): " + backwardResult.join(" <-> "),
    );
  }
}

// =================================================================
// EKSEKUSI & UJI COBA CODE
// =================================================================

const list = new DoublyLinkedList();

console.log("--- 1. Testing Append & Prepend ---");
list.append(20); // List: 20
list.append(30); // List: 20 <-> 30
list.prepend(10); // List: 10 <-> 20 <-> 30
list.print();

console.log("\n--- 2. Testing InsertAt ---");
list.insertAt(1, 15); // Sisipkan 15 di indeks 1
list.insertAt(4, 40); // Sisipkan 40 di indeks 4 (ujung akhir)
list.print();

console.log("\n--- 3. Testing Delete ---");
console.log("Menghapus data 20:", list.delete(20)); // Hapus node tengah
console.log("Menghapus data 10 (Head):", list.delete(10)); // Hapus head
list.print();

console.log("\n--- 4. Testing Reverse ---");
list.reverse();
list.print();
