function hasPairWithSum(data, k) {
  const seen = new Set();

  for (let num of data) {
    const complement = k - num;
    if (seen.has(complement)) {
      return true; 
    }
    seen.add(num);
  }

  return false; 
}

console.log(hasPairWithSum([10, 15, 3, 7], 17));