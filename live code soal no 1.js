function arrayRemover (array, index, count) {
  var tmp = [];

  for (var i = 0 ; i < count ; i++){

    if (index === 0 ) {
      array[i] = 'deleted'
    } else {
      array[i+1] = 'deleted'
    }

  }
return array
}
​
console.log(arrayRemover([ 1, 2, 3] , 0 , 2 )); // [3]
 console.log(arrayRemover([ 666, 666, 333, 10, 5, 6] , 1 , 2 )); // [ 666, 10, 5, 6 ]
console.log(arrayRemover([ 1, 2, 3], 0, 3)) // []