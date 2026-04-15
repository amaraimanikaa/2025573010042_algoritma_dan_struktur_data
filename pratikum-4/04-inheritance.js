class Kendaraan {
    constructor(merk, model, tahun) {
        this.merk = merk;
        this.model = model;
        this.tahun = tahun;
        this.kecepatanSaatIni = 0;
    }

    akselerasi(tambahan) {
        this.kecepatanSaatIni += tambahan;
        console.log(`${this.merk} ${this.model}: kecepatan ${this.kecepatanSaatIni} km/h`);

    }

    rem() {
        this.kecepatanSaatIni = 0;
        console.log(`${this.merk} ${this.model}: berhenti.`);
    }

    info() {
        return `${this.tahun} ${this.merk} ${this.model}`;
    }
}

class Mobil extends Kendaraan {
    constructor(merk, model, tahun, jumlahPintu) {
        super(merk, model, tahun);
        this.jumlahPintu = jumlahPintu;
    }

    bunyikanKlakson() {
        console.log(`${this.merk}: Beep beep!`);
    }

    info() {
        const infoParent = super.info(); // ambil hasil parent
        return `${infoParent} (${this.jumlahPintu} pintu)`;
    }
}

class Motor extends Kendaraan {
    constructor(merk, model, tahun, jenisMotor) {
        super(merk, model, tahun);
        this.jenisMotor = jenisMotor;
    }

    wheelie() {
        if (this.kecepatanSaatIni > 50) {
            console.log(`${this.merk}: Wheelie!`);
        } else {
            console.log('Kecepatan terlalu rendah untuk wheelie.');
        }
    }

    info() {
        return `${super.info()} [${this.jenisMotor}]`;
    }
}

const mobil = new Mobil('Toyota', 'Avanza', 2022, 4);
const motor = new Motor('Honda', 'CBR600RR', 2021, 'Sport');

console.log('=== Info Kendaraan ===');
console.log(mobil.info());
console.log(motor.info());

console.log('\n=== Aksi ===');
mobil.akselerasi(60);
mobil.bunyikanKlakson();
motor.akselerasi(80);
motor.wheelie();
motor.rem();

console.log('\n=== instanceof ===');
console.log('mobil instanceof Mobil :', mobil instanceof Mobil);
console.log('mobil instanceof Kendaraan :', mobil instanceof Kendaraan);
console.log('motor instanceof Mobil :', motor instanceof Mobil);

console.log('\n=== Polymorphism ===');
const semuaKendaraan = [mobil, motor];
semuaKendaraan.forEach(K => console.log(K.info()));


console.log('');
console.log('=== Latihan4 ===');

class Hewan {
  constructor(nama, suara) {
    this.nama = nama;
    this.suara = suara;
  }

  bersuara() {
    console.log(`${this.nama} berkata: ${this.suara}`);
  }

  info() {
    console.log(`Ini adalah hewan bernama ${this.nama}.`);
  }
}

class Anjing extends Hewan {
  fetch() {
    console.log(`${this.nama} mengambil bola!`);
  }

  // Override info()
  info() {
    console.log(`Ini adalah hewan bernama ${this.nama} (jenis: anjing).`);
  }
}

class Kucing extends Hewan {
  cakarSofa() {
    console.log(`${this.nama} mencakar sofa!`);
  }

  // Override bersuara() dengan memanggil super.bersuara()
  bersuara() {
    super.bersuara(); // Memanggil method dari parent
    console.log("Purrr...");
  }
}

const doggy1 = new Anjing("Buddy", "Woof");
const doggy2 = new Anjing("Rex", "Guk guk");
const kitty1 = new Kucing("Luna", "Meow");
const kitty2 = new Kucing("Milo", "Ngeong");

const daftarHewan = [doggy1, doggy2, kitty1, kitty2];

console.log("--- Demonstrasi Polymorphism ---");
daftarHewan.forEach((hewan) => {
  hewan.info();     // Akan menjalankan info() sesuai class masing-masing
  hewan.bersuara(); // Akan menjalankan bersuara() sesuai class masing-masing
  console.log("--------------------");
});