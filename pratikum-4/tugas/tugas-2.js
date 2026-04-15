class Stack {
  constructor() {
    this.items = [];
  }

  push(element) {
    this.items.push(element);
  }

  pop() {
    if (this.isEmpty()) return null;
    return this.items.pop();
  }

  isEmpty() {
    return this.items.length === 0;
  }
}

function cekKurungSeimbang(ekspresi) {
  const tumpukan = new Stack();

  for (let i = 0; i < ekspresi.length; i++) {
    let karakter = ekspresi[i];

    if (karakter === '(' || karakter === '[' || karakter === '{') {
      tumpukan.push(karakter);
    } 
    
    else if (karakter === ')' || karakter === ']' || karakter === '}') {
      
      if (tumpukan.isEmpty()) {
        return false;
      }

      let top = tumpukan.pop();
      if (
        (karakter === ')' && top !== '(') ||
        (karakter === ']' && top !== '[') ||
        (karakter === '}' && top !== '{')
      ) {
        return false;
      }
    }
  }

  return tumpukan.isEmpty();
}

const daftarUji = [
  '(2 + 3) * (4 - 1)',
  '[(a + b]',
  ')(',
  '(([()]))',
  '{ [ ( ) ] }',
  '((()))'
];

console.log("--- Hasil Evaluasi Ekspresi ---");
daftarUji.forEach(ekspresi => {
  const hasil = cekKurungSeimbang(ekspresi);
  console.log(`'${ekspresi}' -> Seimbang: ${hasil}`);
});