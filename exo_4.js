function countBuildingsWithWestView(buildings) {
 let tallestFromRight = [];

  
  let max = 0;
  for (let i = buildings.length - 1; i >= 0; i--) {
    tallestFromRight[i] = max;
    if (buildings[i] > max) {
      max = buildings[i];
    }
  }

  let count = 0;
  for (let i = 0; i < buildings.length; i++) {
    if (buildings[i] > tallestFromRight[i]) {
      count++;
    }
  }

  return count;
}
console.log(countBuildingsWithWestView([3, 7, 8, 3, 6, 1])); 