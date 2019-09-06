/*Live Code 2 :

Pseudeu Code :
1. 
START
INPUT array firstArr & secondArr

MIN Arr1 = firstArr[0]

for ( var u = 0 ; u < firstArr.length ; u++)

IF Arr1 > firstArr[u]

DO Arr1 = firstArr[u]


MIN Arr2 = secondArr[0]

for ( var j = 0 ; j < secondArr.length ; j++)

IF Arr1 > firstArr[j]

DO Arr1 = firstArr[j]


IF Arr1 > Arr2 

PRINT Arr1

ELSE

PRINT Arr2
END*/



function highestGlobalMinimum(firstArr, secondArr) {
    // only write code here
    
    var a=firstArr[0];
    for(var u=0; u<firstArr.length;u++){
      if(firstArr[u]<a){
        a=firstArr[u];
      }
    }
    var b=secondArr[0];
    for(var j=0; j<secondArr.length; j++){
      if(secondArr[j]<b){
        b=secondArr[j];
      }
    }
    if(a>b){
      return a;
    }
    else{
      return b;
    }
  }
  
  console.log(highestGlobalMinimum([1, 1, 1] , [8, 15, 17, 9])); // 8
  console.log(highestGlobalMinimum([4, 8, 9, 12] , [33, 88, 99 ,11])); // 11
  console.log(highestGlobalMinimum([1, 2, 5, 2, 2] , [67, 45, 55])); // 45/
  console.log(highestGlobalMinimum([6, 2, 4, 10, 8, 2] , [6, 5, 13, 23])); // 5
  console.log(highestGlobalMinimum([5, 11, 18, 6], [3, 1, 8, 13])); // 5
