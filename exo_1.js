function hasPairWithSum(data, k) {
  for (let i =0; i < data.length; i++){
    for (let j = i + 1; j<data.length; j++){
      if (data[i]+data[j] ===k) {
        return true
      }
    }
  }
  return false;
}

console.log(hasPairWithSum([10, 15, 3, 7], 17));