function urutkanAbjad(str) {
  var fadh = 'abcdefghijklmnopqrstuvwxyz', abjad ='';
  for( var i = fadh.length - 1; i >= 0; i++){
    for ( var x = str.length - 1 ; x >= 0; x++){
      if (fadh[i] === str[x]){
        abjad += str[x];
      }
    }
    
  }
  return fadh;
}

// TEST CASES
console.log(urutkanAbjad('hello')); // 'ehllo'
console.log(urutkanAbjad('truncate')); // 'acenrttu'
console.log(urutkanAbjad('developer')); // 'deeeloprv'
console.log(urutkanAbjad('software')); // 'aeforstw'
console.log(urutkanAbjad('aegis')); // 'aegis'