function ubahHuruf(kata) {
 var huruf = 'abcdefghijklmnopqrstuvwxyz';
  var urutan = 0;
  var ganti = '';
  
  for(var i = 0; i < kata.length; i ++) {
    urutan = huruf.indexOf(kata[i]);
    ganti += huruf[urutan+1];
  }
  return ganti;
}

// TEST CASES
console.log(ubahHuruf('wow')); // xpx
console.log(ubahHuruf('developer')); // efwfmpqfs
console.log(ubahHuruf('javascript')); // kbwbtdsjqu
console.log(ubahHuruf('keren')); // lfsfo
console.log(ubahHuruf('semangat')); // tfnbohbu