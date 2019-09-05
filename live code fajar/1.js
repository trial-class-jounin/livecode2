function highestGlobalMinimum(firstArr, secondfirstArr) {
   var len = firstArr.length;
  var a = Infinity;
  while (len--) {
    if (firstArr[len] < a) {
      a = firstArr[len];
    }
  }
  var le = secondfirstArr.length;
  var b = Infinity;
  while (le--) {
    if (secondfirstArr[le] < b) {
      b = secondfirstArr[le];
    }
  }
if (a>b) {
  return a
  }
  else{
     return b
  }
}
console.log(highestGlobalMinimum([1, 1, 1] , [8, 15, 17, 9])); // 8
console.log(highestGlobalMinimum([4, 8, 9, 12] , [33, 88, 99 ,11])); // 11
console.log(highestGlobalMinimum([1, 2, 5, 2, 2] , [67, 45, 55])); // 45
console.log(highestGlobalMinimum([6, 2, 4, 10, 8, 2] , [6, 5, 13, 23])); // 5