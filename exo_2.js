function cuntBuildingwithWestview(height){
  let count = 0;
  for(let i=0; i < heights.lenght; i++){
    let hasWestView = true;
    for (let j= i+1; j < height.length; j++){
      if (height[j] >= height[i]) {
        hasWestView = false;
        break;
      }
    }
    if (hasWestView) count++;
  }
  return count
}

console.log(countBuildingsWithView([3, 7, 8, 3, 6, 1]));