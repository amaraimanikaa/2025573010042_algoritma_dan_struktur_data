// 1. Definisi Class Node Singly Linked List
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

// Helper function untuk membuat Linked List dari Array (untuk mempermudah uji coba)
function createLinkedList(arr) {
  if (arr.length === 0) return null;
  let head = new Node(arr[0]);
  let current = head;
  for (let i = 1; i < arr.length; i++) {
    current.next = new Node(arr[i]);
    current = current.next;
  }
  return head;
}

// Helper function untuk mencetak Linked List ke konsol
function printLinkedList(head) {
  let current = head;
  let result = [];
  while (current) {
    result.push(current.data);
    current = current.next;
  }
  console.log(result.length > 0 ? result.join(" -> ") : "List Kosong");
}

// =================================================================
// 2. Fungsi: palindromLL(head)
// Hint: Konversi ke array dulu, lalu cek menggunakan two-pointer.
// =================================================================
function palindromLL(head) {
  let current = head;
  let arr = [];

  // Salin semua data linked list ke dalam array
  while (current) {
    arr.push(current.data);
    current = current.next;
  }

  // Cek palindrom menggunakan teknik dua pointer (dari kiri dan kanan)
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    if (arr[left] !== arr[right]) {
      return false; // Jika ada yang tidak sama, bukan palindrom
    }
    left++;
    right--;
  }
  return true;
}

// =================================================================
// 3. Fungsi: hapusNDariAkhir(head, n)
// Hint: Two-pointer (Fast & Slow). Jaga jarak 'n' langkah antar pointer.
// =================================================================
function hapusNDariAkhir(head, n) {
  // Kita gunakan dummy node di depan head untuk mempermudah jika head yang harus dihapus
  let dummy = new Node(0);
  dummy.next = head;

  let fast = dummy;
  let slow = dummy;

  // Gerakkan pointer 'fast' sebanyak n + 1 langkah ke depan
  for (let i = 0; i <= n; i++) {
    if (fast === null) return head; // n melebihi panjang list
    fast = fast.next;
  }

  // Gerakkan keduanya bersamaan sampai 'fast' mencapai ujung (null)
  while (fast !== null) {
    fast = fast.next;
    slow = slow.next;
  }

  // Sekarang pointer 'slow' berada tepat SEBELUM node yang ingin dihapus
  slow.next = slow.next.next;

  return dummy.next; // Mengembalikan head yang baru
}

// =================================================================
// 4. Fungsi: tengahLinkedList(head)
// Hint: Fast & Slow pointer. Fast bergerak 2 langkah, Slow 1 langkah.
// =================================================================
function tengahLinkedList(head) {
  let slow = head;
  let fast = head;

  // Ketika fast mencapai akhir, slow akan tepat berada di tengah
  while (fast !== null && fast.next !== null) {
    slow = slow.next; // gerak 1 langkah
    fast = fast.next.next; // gerak 2 langkah
  }

  return slow; // Mengembalikan node tengah (atau node tengah kedua jika genap)
}

// =================================================================
// 5. UJI COBA (Minimal 3 Kasus Berbeda per Fungsi)
// =================================================================

console.log("=== PENGUJIAN FUNGSI 1: palindromLL ===");
// Kasus 1: Palindrom ganjil [1 -> 2 -> 3 -> 2 -> 1]
let p1 = createLinkedList([1, 2, 3, 2, 1]);
console.log("Kasus 1:", palindromLL(p1)); // Expected: true

// Kasus 2: Palindrom genap [1 -> 2 -> 2 -> 1]
let p2 = createLinkedList([1, 2, 2, 1]);
console.log("Kasus 2:", palindromLL(p2)); // Expected: true

// Kasus 3: Bukan Palindrom [1 -> 2 -> 3 -> 4]
let p3 = createLinkedList([1, 2, 3, 4]);
console.log("Kasus 3:", palindromLL(p3)); // Expected: false

console.log("\n=== PENGUJIAN FUNGSI 2: hapusNDariAkhir ===");
// Kasus 1: Hapus node ke-2 dari akhir di list [1 -> 2 -> 3 -> 4 -> 5]
let h1 = createLinkedList([1, 2, 3, 4, 5]);
console.log("Sebelum dihapus:");
printLinkedList(h1);
h1 = hapusNDariAkhir(h1, 2);
console.log("Setelah dihapus ke-2 dari akhir:");
printLinkedList(h1); // Expected: 1 -> 2 -> 3 -> 5

// Kasus 2: Hapus node paling terakhir (n = 1) di list [10 -> 20 -> 30]
let h2 = createLinkedList([10, 20, 30]);
h2 = hapusNDariAkhir(h2, 1);
console.log("Hapus ke-1 dari akhir:");
printLinkedList(h2); // Expected: 10 -> 20

// Kasus 3: Hapus HEAD / node pertama (n = ukuran list) di list [100, 200]
let h3 = createLinkedList([100, 200]);
h3 = hapusNDariAkhir(h3, 2);
console.log("Hapus ke-2 dari akhir (Head):");
printLinkedList(h3); // Expected: 200

console.log("\n=== PENGUJIAN FUNGSI 3: tengahLinkedList ===");
// Kasus 1: Panjang list ganjil [1 -> 2 -> 3 -> 4 -> 5]
let t1 = createLinkedList([1, 2, 3, 4, 5]);
let mid1 = tengahLinkedList(t1);
console.log("Tengah list ganjil:", mid1 ? mid1.data : null); // Expected: 3

// Kasus 2: Panjang list genap [1 -> 2 -> 3 -> 4 -> 5 -> 6]
let t2 = createLinkedList([1, 2, 3, 4, 5, 6]);
let mid2 = tengahLinkedList(t2);
console.log(
  "Tengah list genap (mengembalikan yang kedua):",
  mid2 ? mid2.data : null,
); // Expected: 4

// Kasus 3: List hanya berisi 1 node [99]
let t3 = createLinkedList([99]);
let mid3 = tengahLinkedList(t3);
console.log("Tengah list 1 elemen:", mid3 ? mid3.data : null); // Expected: 99
