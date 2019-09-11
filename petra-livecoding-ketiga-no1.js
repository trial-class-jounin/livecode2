function arrayRemover (array, index, count) {


//asli bikinan sendiri - petra

var systemCallGenerateResult = "["
//is that SAO Alicization reference?
//i am not weebs for nothing, ya
for(var i=0;i<array.length;i++){
  //cari mulai kapan remove array
 if(i == index || i> index && i <= index+ count-1){ 
    //kalo dah nemu array dari mana sampe mana yang mau diremove
    //skip, literally do nothing
    }
  else{
    //selain dari array yang diremove, semua nambahin ke var systemCallGenerateResult, gampangnya istilah array itu push, tapi disini kita pake if else sama for doang, sangat tradisional
    if(systemCallGenerateResult == "["){
    systemCallGenerateResult += array[i]
    array[i+1]  
    }
    else{
    systemCallGenerateResult += ", " + array[i]
    array[i+1]
    }
  }
}
systemCallGenerateResult += "]"
return systemCallGenerateResult

//cara gampang
// array.splice(index,count)
// return array
}

console.log(arrayRemover([ 1, 2, 3] , 0 , 2 )); // [3]
 console.log(arrayRemover([ 666, 666, 333, 10, 5, 6] , 1 , 2 )); // [ 666, 10, 5, 6 ]
console.log(arrayRemover([ 1, 2, 3], 0, 3)) // []

// PSUEDOCODE
// MAKE Function array remover WITH array, index, count as limiter
// REMOVE array from index to count
// RETURN array




