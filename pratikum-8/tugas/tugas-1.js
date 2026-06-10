class HashMapLinearProbing {
  constructor(capacity = 10) {
    this.capacity = capacity;
    this.size = 0;
    this.table = new Array(this.capacity).fill(null);
    // Menggunakan objek unik sebagai penanda slot yang dihapus (Tombstone)
    this.TOMBSTONE = { isDeleted: true };
  }

  // Fungsi hash sederhana berbasis kode ASCII karakter
  _hash(key) {
    let hashValue = 0;
    const stringKey = String(key);
    for (let i = 0; i < stringKey.length; i++) {
      hashValue += stringKey.charCodeAt(i);
    }
    return hashValue % this.capacity;
  }

  _getLoadFactor() {
    return this.size / this.capacity;
  }

  // Poin 3 & 5: Memasukkan data baru + Resize Otomatis
  put(key, value) {
    // Jika load factor > 0.7, gandakan ukuran tabel dan rehash elemen (Poin 5)
    if (this._getLoadFactor() > 0.7) {
      this._resize();
    }

    let index = this._hash(key);
    let firstTombstoneIndex = -1;

    // Poin 3: Cari slot kosong berikutnya (modulo kapasitas) jika terjadi collision
    while (this.table[index] !== null) {
      if (this.table[index] === this.TOMBSTONE) {
        if (firstTombstoneIndex === -1) {
          firstTombstoneIndex = index; // Catat slot tombstone pertama untuk optimasi tempat
        }
      } else if (this.table[index].key === key) {
        // Jika key sudah ada, update nilainya
        this.table[index].value = value;
        return;
      }
      index = (index + 1) % this.capacity;
    }

    // Gunakan slot tombstone yang sempat dilewati (jika ada), jika tidak gunakan slot null saat ini
    const targetIndex =
      firstTombstoneIndex !== -1 ? firstTombstoneIndex : index;
    this.table[targetIndex] = { key, value };
    this.size++;
  }

  // Mengambil nilai berdasarkan key
  get(key) {
    let index = this._hash(key);
    let startIndex = index;

    while (this.table[index] !== null) {
      if (
        this.table[index] !== this.TOMBSTONE &&
        this.table[index].key === key
      ) {
        return this.table[index].value;
      }
      index = (index + 1) % this.capacity;
      if (index === startIndex) break; // Berhenti jika sudah berputar penuh
    }
    return undefined;
  }

  // Poin 4: Menghapus data dengan Tombstone Marker
  delete(key) {
    let index = this._hash(key);
    let startIndex = index;

    while (this.table[index] !== null) {
      if (
        this.table[index] !== this.TOMBSTONE &&
        this.table[index].key === key
      ) {
        // Tandai slot sebagai 'terhapus' menggunakan tombstone, bukan null (Poin 4)
        this.table[index] = this.TOMBSTONE;
        this.size--;
        return true;
      }
      index = (index + 1) % this.capacity;
      if (index === startIndex) break;
    }
    return false;
  }

  // Poin 5: Membuat tabel baru 2x kapasitas dan rehash semua elemen
  _resize() {
    const oldTable = this.table;
    this.capacity = this.capacity * 2;
    this.size = 0;
    this.table = new Array(this.capacity).fill(null);

    for (let i = 0; i < oldTable.length; i++) {
      const entry = oldTable[i];
      // Hanya rehash elemen asli yang aktif (bukan null dan bukan tombstone)
      if (entry !== null && entry !== this.TOMBSTONE) {
        this.put(entry.key, entry.value);
      }
    }
  }

  // Fungsi pembantu untuk memvisualisasikan isi tabel di terminal
  display() {
    console.log(
      `Kapasitas: ${this.capacity} | Size: ${this.size} | Load Factor: ${this._getLoadFactor().toFixed(2)}`,
    );
    const visual = this.table.map((item, idx) => {
      if (item === null) return `  [${idx}]: null`;
      if (item === this.TOMBSTONE) return `  [${idx}]: <TOMBSTONE>`;
      return `  [${idx}]: { ${item.key}: ${item.value} }`;
    });
    console.log(visual.join("\n") + "\n-----------------------------------");
  }
}

// === PENGUJIAN TUGAS 1 ===
const myHash = new HashMapLinearProbing(5); // Kapasitas awal sengaja kecil
myHash.put("Budi", 90);
myHash.put("Andi", 85);
myHash.put("Siti", 95); // Pengisian ini memicu resize otomatis karena load factor > 0.7
myHash.display();

myHash.delete("Andi"); // Andi dihapus -> Menjadi Tombstone
myHash.display();

console.log("Ambil data Siti:", myHash.get("Siti")); // Tetap bisa ditemukan melewati Tombstone
