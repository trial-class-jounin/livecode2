/*algoritma/psedeucode :
start
function arrayRemove(array, value) 
for (Count --)
if (index === 0)
array[count] = "";
atau array [count+1] ="";
return value;
end  */

function arrayRemover (array, index, count) {
    while(count--){
     if(index === 0){
       array[count] = "";
     }else{
       array[count+1] = "";
     }
   }
   return array
 }
 console.log(arrayRemover([ 1, 2, 3] , 0 , 2 ));
 console.log(arrayRemover([ 666, 666, 333, 10, 5, 6] , 1 , 2 ));
 console.log(arrayRemover([ 1, 2, 3], 0, 3))