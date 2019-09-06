/*
========================
The Alphabetical Express
========================
Name : @arfibintang
[INSTRUCTIONS]
formTrainSeating adalah sebuah function yang menerima satu parameter berupa string.
Ini adalah sebuah simulasi penempatan penumpang di dalam gerbong kereta.
Gerbong terdiri dari 5, yaitu gerbong A, gerbong B, C, D, dan E.
Function akan membentuk kereta dalam bentuk multidimension array.
Kereta direpresentasikan sebagai sebuah array yang berisi gerbong.
Gerbong adalah sebuah array yang berisi huruf tiap penumpang.
Setiap gerbong hanya boleh menampung penumpang dengan nama yang sesuai dengan nama gerbong.
Setiap penumpang direpresentasikan dengan satu huruf, antara A, B, C, D, atau E.
Bentuk Kereta:
[ GERBONG A, GERBONG B, GERBONG C, GERBONG D, GERBONG E ]
Bentuk Gerbong:
Contoh bentuk gerbong A
[ 'A', 'A' ]
Contoh bentuk gerbong B
[ 'B', 'B' ]
Kumpulan penumpang direpresentasikan dalam string.
Contoh:
input: 'ABCA'
maka, ada penumpang A, B, C, dan A.
Kita masukkan setiap penumpang ke masing-masing gerbong.
output: [ ['A', 'A'], ['B'], ['C'], [], []]
gerbong A berisi dua A,
gerbong B berisi satu B,
gerbong C berisi satu C,
gerbong D kosong,
dan gerbong E kosong.
Function akan me-return array kereta yang telah dibentuk.
[RULE]
Tidak perlu pseudocode!
Dilarang menggunakan sintaks .split()!
*/
function formTrainSeating(passengers) {
    // only write code here
    var kereta = []
    var gerbongA = []
    var gerbongB = []
    var gerbongC = []
    var gerbongD = []
    var gerbongE = []
    for(var z = 0; z < passengers.length ; z++){
      if(passengers[z] === 'A'){
        gerbongA.push('A')
      }else if(passengers[z] === 'B'){
        gerbongB.push('B')
      }else if(passengers[z] === 'C'){
        gerbongC.push('C')
      }else if(passengers[z] === 'D'){
        gerbongD.push('D')
      }else if(passengers[z] === 'E'){
        gerbongE.push('E')
      }   
    }
    kereta.push(gerbongA)
    kereta.push(gerbongB)
    kereta.push(gerbongC)
    kereta.push(gerbongD)
    kereta.push(gerbongE)
    return kereta
  }
console.log(formTrainSeating('ABDCCCE')); // [['A'], ['B'], ['C', 'C', 'C'], ['D'], ['E']]
console.log(formTrainSeating('ABC')); // [['A'], ['B'], ['C'], [], []]
console.log(formTrainSeating('E')); // [[], [], [], [], ['E']]
console.log(formTrainSeating('EAB')); // [['A'], ['B'], [], [], ['E']]
console.log(formTrainSeating('BBABB')); // [['A'], ['B', 'B', 'B', 'B'], [], [], []]



