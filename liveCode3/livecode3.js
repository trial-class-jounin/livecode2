//array remove

function arrayRemover (array, index, count) {
    for(var i = 0; i < count; i++){
    if(index === 0){
      array[i] = ''
    }else{
      array[i++] = ''
    }
  }
  return array
  }
  console.log(arrayRemover([ 1, 2, 3] , 0 , 2 ));
  console.log(arrayRemover([ 666, 666, 333, 10, 5, 6] , 1 , 2 ));
  console.log(arrayRemover([ 1, 2, 3], 0, 3))
  
console.log(\n, \n, '===================');

//spell name

function invokeSpell (input) {
    const spells = [
        { q: 3, w: 0, e: 0, spellName: 'Cold Snap' },
        { q: 0, w: 2, e: 1, spellName: 'Alacrity' },
        { q: 1, w: 0, e: 2, spellName: 'Forge Spirit' },
        { q: 0, w: 0, e: 3, spellName: 'Sunstrike' },
        { q: 1, w: 2, e: 0, spellName: 'Tornado' },
        { q: 0, w: 3, e: 0, spellName: 'EMP' },
        { q: 0, w: 1, e: 2, spellName: 'Chaos Meteor' },
        { q: 1, w: 1, e: 1, spellName: 'Deafening Blast' },
        { q: 2, w: 0, e: 1, spellName: 'Ice Wall' },
        { q: 2, w: 1, e: 0, spellName: 'Ghost Walk' },
    ];
    var countq =0;
    var countw =0;
    var counte =0;
  
    for(var i = 0; i < input.length; i++) {
      if(input[i] == 'q') {
        countq++;
        
      } else if(input[i] == 'w') {
        countw++;
        
      } else if(input[i] == 'e') {
        counte++;
        
      }
      
    }
    
    if(countq == 3 && countw == 0 && counte == 0) {
      return spells[0].spellName;
      
    } else if(countq == 0 && countw == 2 && counte == 1) {
      return spells[1].spellName;
      
    } else if(countq == 1 && countw == 0 && counte == 2) {
      return spells[2].spellName;
      
    } else if(countq == 0 && countw == 0 && counte == 3) {
      return spells[3].spellName;
      
    } else if(countq == 1 && countw == 2 && counte == 0) {
      return spells[4].spellName;
      
    } else if(countq == 0 && countw == 3 && counte == 0) {
      return spells[5].spellName;
      
    } else if(countq == 0 && countw == 1 && counte == 2) {
      return spells[6].spellName;
      
    } else if(countq == 1 && countw == 1 && counte == 1) {
      return spells[7].spellName;
      
    } else if(countq == 2 && countw == 0 && counte == 1) {
      return spells[8].spellName;
      
    } else if(countq == 2 && countw == 1 && counte == 0) {
      return spells[9].spellName;
      
    } else {
      return 'Combination does not exist';
    } 
  }
  console.log(invokeSpell('qwe')); // Deafening Blast
  console.log(invokeSpell('ewq')); // Deafening Blast
  console.log(invokeSpell('qqq')); // Cold Snap
  console.log(invokeSpell('wwq')); // Tornado
  console.log(invokeSpell('wwe')); // Alacrity
  console.log(invokeSpell('wew')); // Alacrity
  console.log(invokeSpell('wqa')); // Combination does

  console.log(\n, \n, '===================');

  function ganjilGenapAsianGames ( date, data ) {
    // Your code here
    if (date > 31 || date < 1){
      return 'invalid dates'
    }
    var plat = []
    for (var i = 0; i<data.length; i++){
      if(data[i].type === 'Mobil'){
        for( var j=data[i].plat.length-1 ; j>=0 ; j--){
          if(data[i].plat[j] === ' '){
            // console.log(data[i].plat[j-1])
            plat.push(data[i].plat[j-1])
            break
          }
        }
      }
    }
    var hasil = 0
    for( var i=0; i<plat.length; i++){
      if(date % 2 === 0 && plat[i] % 2 !== 0){
        hasil++
      } else if(date % 2 !== 0 && plat[i] % 2 === 0){
        hasil++
      }
    }
    return hasil
  }
  
  
  console.log(ganjilGenapAsianGames(30, [{
    plat: 'B 1234 ABC',
    type: 'Mobil'
  }, {
    plat: 'A 2457 HE',
    type: 'Motor'
  }, {
    plat: 'AB 87 RFS',
    type: 'Motor'
  }, {
    plat: 'Z 999 ERT',
    type: 'Mobil'
  }])) // 1
  
  console.log(ganjilGenapAsianGames(26, [{
    plat: 'A 24 HE',
    type: 'Mobil'
  }, {
    plat: 'AB 871 RFS',
    type: 'Mobil'
  }, {
    plat: 'Z 9992 ERT',
    type: 'Mobil'
  }])) // 1
  
  console.log(ganjilGenapAsianGames(1, [{
    plat: 'A 24 WE',
    type: 'Mobil'
  }, {
    plat: 'AB 871 RFS',
    type: 'Mobil'
  }, {
    plat: 'Z 9992 XOXO',
    type: 'Mobil'
  }])) // 2
  
  console.log(ganjilGenapAsianGames(1, [
    {
      plat: 'A 2431 HE',
      type: 'Motor'
    }, {
      plat: 'AB 87112 RFS',
      type: 'Motor'
    }, {
      plat: 'Z 999 ERT',
      type: 'Motor'
    }
  ])) // 0
  
  console.log(ganjilGenapAsianGames(32, [{
    plat: 'X 123 HAHA',
    type: 'Mobil'
  }])) // invalid dates
  
  console.log(ganjilGenapAsianGames(0, [{
    plat: 'X 123 HAHA',
    type: 'Mobil'
  }])) // invalid dates
  