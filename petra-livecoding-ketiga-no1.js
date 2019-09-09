function arrayRemover (array, index, count) {

//tes pertama

//   for (var i = 0 ; i < count ; i++){
    
//     if (index === 0 ) {
//       array[i] = ''
//     } else {
//       array[i+1] = ''
//     }
  
//   }
// return array

//test kedua

// var systemCallGenerateResult = "["
// for(var i=0;i<array.length;i++){
//   if(i == index){
//     var systemCallGenerateCount = i+count
//     array[systemCallGenerateCount]
//     var systemCallGenerateLast= array.length-systemCallGenerateCount
//     for(var j=0;j<systemCallGenerateLast;j++){
//     systemCallGenerateResult += ", " + array[i]
//     array[i+1]
//     }
//   }
//   else{
//     if(i=0){
//     systemCallGenerateResult += array[i]
//     array[i+1]  
//     }
//     else{
//     systemCallGenerateResult += ", " + array[i]
//     array[i+1]
//     }
//   }
// }
// systemCallGenerateResult += "]"
// return systemCallGenerateResult


array.splice(index,count)
return array
}

console.log(arrayRemover([ 1, 2, 3] , 0 , 2 )); // [3]
 console.log(arrayRemover([ 666, 666, 333, 10, 5, 6] , 1 , 2 )); // [ 666, 10, 5, 6 ]
console.log(arrayRemover([ 1, 2, 3], 0, 3)) // []

// PSUEDOCODE
// MAKE Function array remover WITH array, index, count as limiter
// REMOVE array from index to count
// RETURN array




