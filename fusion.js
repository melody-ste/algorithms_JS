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

// ========== BUBBLE SORT ==========

class BubbleSort {
  constructor() { this.comparisons = 0; }
  sort(array) {
    const a = array.slice();
    const n = a.length;
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n - 1 - i; j++) {
        this.comparisons++;
        if (a[j] > a[j + 1]) {
          [a[j], a[j+1]] = [a[j+1], a[j]];
        }
      }
    }
    return a;
  }
}

const b = new BubbleSort();
const sortedBubble = b.sort(numbers);

console.log(`Tri à bulle: ${b.comparisons} comparaisons - ${JSON.stringify(sortedBubble)}`);

// ========== INSERTION SORT ==========

class InsertionSort {
  constructor() { this.comparisons = 0; }
  sort(arr) {
    const a = arr.slice();
    const n = a.length;
    for (let i = 1; i < n; i++) {
      const key = a[i];
      let j = i - 1;
      while (j >= 0) {
        this.comparisons++;
        if (a[j] > key) {
          a[j+1] = a[j];
          j--;
        } else {
          break;
        }
      }
      a[j+1] = key;
    }
    return a;
  }
}

const ins = new InsertionSort();
const sortedInsertion = ins.sort(numbers);

console.log(`Tri par insertion: ${ins.comparisons} comparaisons - ${JSON.stringify(sortedInsertion)}`);

// ========== SELECTION SORT ==========

class SelectionSort {
  constructor() { this.comparisons = 0; }
  sort(arr) {
    const a = arr.slice();
    const n = a.length;
    for (let i = 0; i < n - 1; i++) {
      let minIdx = i;
      for (let j = i + 1; j < n; j++) {
        this.comparisons++;
        if (a[j] < a[minIdx]) minIdx = j;
      }
      if (minIdx !== i) [a[i], a[minIdx]] = [a[minIdx], a[i]];
    }
    return a;
  }
}

const s = new SelectionSort();
const sortedSelection = s.sort(numbers);

console.log(`Tri par sélection: ${s.comparisons} comparaisons - ${JSON.stringify(sortedSelection)}`);

// ========== QUICK SORT ==========

class QuickSort {
  constructor() { this.comparisons = 0; }
  sort(arr) {
    return this._quick(arr.slice());
  }
  _quick(a) {
    if (a.length <= 1) return a;
    const pivot = a[0]; 
    const less = [];
    const greater = [];
    for (let i = 1; i < a.length; i++) {
      this.comparisons++;
      if (a[i] < pivot) less.push(a[i]);
      else greater.push(a[i]);
    }
    return this._quick(less).concat([pivot], this._quick(greater));
  }
}

const q = new QuickSort();
const sortedQuick = q.sort(numbers);

console.log(`Tri rapide: ${q.comparisons} comparaisons - ${JSON.stringify(sortedQuick)}`);