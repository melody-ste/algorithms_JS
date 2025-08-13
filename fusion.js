const fs = require('fs');

const fileName = process.argv[2];

if (!fileName) {
  console.error('Usage: node monProgramme.js <fichier>');
  process.exit(1);
}

// Méthode synchrone
let data;
try {
  data = fs.readFileSync(fileName, 'utf8');
  console.log(data);
} catch (error) {
  console.error(error.message);
  process.exit(1);
}
// si fichier vide
if (data.trim() === '') {
  console.error('Erreur: fichier vide');
  process.exit(1);
}

// mettre en tableau
const tokens = data.trim().split(/\s+/);

// verif des nombres
const numbers = tokens.map(t => {
  const n = Number(t);
  if (!isFinite(n)) {
    console.error(`Erreur: "${t}" n'est pas un nombre valide.`);
    process.exit(1);
  }
  return n;
});


class FusionSort {
  mergeSort(array){
    let length = array.length
    if (length < 2) return; 
    let middle = Math.floor(length/2);
    let leftArray = array.slice(0,middle);
    let rightArray = array.slice(middle)
    
    return this.merge(
      this.mergeSort(leftArray),
      this.mergeSort(rightArray)
    );
  }


  merge(){}
}