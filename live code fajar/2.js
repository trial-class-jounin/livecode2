function formTrainSeating(passengers) {
 var len= passengers.length;
 var min 
 
 var hasil = []
  var A = []
  var B = []
  var C = []
  var D = []
  var E = []
  while (len--) {
     if(passengers[len] === 'A'){
      A.push('A')
    }else if(passengers[len] === 'B'){
      B.push('B')
    }else if(passengers[len] === 'C'){
      C.push('C')
    }else if(passengers[len] === 'D'){
      D.push('D')
    }else if(passengers[len] === 'E'){
      E.push('E')
    }   
  }
  hasil.push(A)
  hasil.push(B)
  hasil.push(C)
  hasil.push(D)
  hasil.push(E)
  return hasil
};
console.log(formTrainSeating('ABDCCCE')); // [['A'], ['B'], ['C', 'C', 'C'], ['D'], ['E']]
console.log(formTrainSeating('ABC')); // [['A'], ['B'], ['C'], [], []]
console.log(formTrainSeating('E')); // [[], [], [], [], ['E']]
console.log(formTrainSeating('EAB')); // [['A'], ['B'], [], [], ['E']]
console.log(formTrainSeating('BBABB')); // [['A'], ['B', 'B', 'B', 'B'], [], [], []]

