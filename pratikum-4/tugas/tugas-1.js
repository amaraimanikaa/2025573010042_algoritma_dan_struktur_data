class Produk {
  constructor(id, nama, harga, stok) {
    this.id = id;
    this.nama = nama;
    this.harga = harga;
    this.stok = stok;
  }

  info() {
    console.log(`[ID: ${this.id}] ${this.nama} - Harga: Rp${this.harga} (Stok: ${this.stok})`);
  }

  tersedia() {
    return this.stok > 0;
  }

  jual(jumlah) {
    if (this.stok >= jumlah) {
      this.stok -= jumlah;
      console.log(`Berhasil menjual ${jumlah} unit ${this.nama}.`);
    } else {
      console.log(`Gagal menjual ${this.nama}: Stok tidak cukup!`);
    }
  }
}

class ProdukDigital extends Produk {
  constructor(id, nama, harga, stok, ukuranFile, formatFile) {
    
    super(id, nama, harga, stok);
    this.ukuranFile = ukuranFile;
    this.formatFile = formatFile;
  }

  info() {
    console.log(`[DIGITAL] ${this.nama} | Ukuran: ${this.ukuranFile}MB | Format: ${this.formatFile} | Harga: Rp${this.harga}`);
  }

  download() {
    console.log(`Mengunduh ${this.nama}... File ${this.formatFile} siap.`);
  }

  jual() {
    console.log(`Akses untuk ${this.nama} telah dikirim ke email pembeli.`);
  }
}

class ProdukFisik extends Produk {
  constructor(id, nama, harga, stok, beratGram, dimensi) {
    super(id, nama, harga, stok);
    this.beratGram = beratGram;
    this.dimensi = dimensi;
  }

  info() {
    console.log(`[FISIK] ${this.nama} | Berat: ${this.beratGram}g | Dimensi: ${this.dimensi} | Harga: Rp${this.harga}`);
  }

  hitungOngkir(tarifPerKg) {
    const beratKg = this.beratGram / 1000;
    const totalOngkir = beratKg * tarifPerKg;
    console.log(`Estimasi ongkir untuk ${this.nama}: Rp${totalOngkir}`);
    return totalOngkir;
  }
}

const ebookJS = new ProdukDigital("D01", "E-Book Belajar JS", 50000, 999, 15, "PDF");
const kursusVideo = new ProdukDigital("D02", "Video Tutorial React", 150000, 999, 1200, "MP4");

const mouseLogi = new ProdukFisik("F01", "Mouse Wireless", 200000, 10, 150, "10x5x3 cm");
const keyboardMech = new ProdukFisik("F02", "Keyboard Mechanical", 850000, 0, 800, "40x15x4 cm"); // Stok 0

const daftarProduk = [ebookJS, kursusVideo, mouseLogi, keyboardMech];

console.log("--- (a) Semua Info Produk (forEach) ---");
daftarProduk.forEach(p => p.info());

console.log("\n--- (b) Produk yang Tersedia (filter) ---");
const produkTersedia = daftarProduk.filter(p => p.tersedia());
produkTersedia.forEach(p => console.log(`- ${p.nama}`));

console.log("\n--- (c) Array Nama Produk Saja (map) ---");
const namaSaja = daftarProduk.map(p => p.nama);
console.log(namaSaja);

console.log("\n--- Testing Method Unik ---");
ebookJS.jual();          // Output digital (tidak kurangi stok)
mouseLogi.jual(2);       // Output fisik (kurangi stok)
mouseLogi.hitungOngkir(10000);