function pangkat(basis, eksponen) {
  
  if (eksponen === 0) {
    return 1;
  }
  
  return basis * pangkat(basis, eksponen - 1);
}

function balikString(str) {
  if (str.length <= 1) {
    return str;
  }
 
  let karakterTerakhir = str[str.length - 1];
  let sisaString = str.slice(0, str.length - 1);
  
  return karakterTerakhir + balikString(sisaString);
}

function cekPalindrom(str) {
  
  const strKecil = str.toLowerCase();
  const hasilBalik = balikString(strKecil);
  
  return strKecil === hasilBalik;
}


console.log("\n--- Uji Pangkat ---");
console.log(`2 pangkat 3 = ${pangkat(2, 3)}`); // 8
console.log(`5 pangkat 2 = ${pangkat(5, 2)}`); // 25

console.log("\n--- Uji Balik String ---");
console.log(`'halo' dibalik menjadi: '${balikString('halo')}'`);
console.log(`'javascript' dibalik menjadi: '${balikString('javascript')}'`);

console.log("\n--- Uji Palindrom ---");
const kataUji = ['katak', 'civic', 'level', 'belajar'];
kataUji.forEach(kata => {
  console.log(`Apakah '${kata}' palindrom? ${cekPalindrom(kata) ? 'YA' : 'BUKAN'}`);
});