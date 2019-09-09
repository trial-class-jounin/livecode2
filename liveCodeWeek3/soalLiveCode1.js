function arrayRemover (array, index, count) {
    // your code here
    var tmp = []
    
    for (var i = 0; i < index; i++) {
        tmp.push(array[i])
    }
  
    for (var j = index+count; j < array.length; j++) {
        tmp.push(array[j])
    }
    // angka.splice(indexKet, jumlah)
    return tmp
  }
  
  console.log(arrayRemover([ 1, 2, 3] , 0 , 2 )); // [3]
  console.log(arrayRemover([ 666, 666, 333, 10, 5, 6] , 1 , 2 )); // [ 666, 10, 5, 6 ]
  console.log(arrayRemover([ 1, 2, 3], 0, 3)) // []
