
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
  
  var hitungQ = 0;
  var hitungW = 0;
  var hitungE = 0;
  
  
  // your code here
  for(var i = 0; i < input.length; i++) {
    if(input[i] == 'q') {
      hitungQ++;
    } else if(input[i] == 'w') {
      hitungW++;
    } else if(input[i] == 'e') {
      hitungE++;  
    }
  }


  if(hitungQ == 3 && hitungW == 0 && hitungE == 0) {
    return spells[0].spellName;
    
  } else if(hitungQ == 0 && hitungW == 2 && hitungE == 1) {
    return spells[1].spellName;
    
  } else if(hitungQ == 1 && hitungW == 0 && hitungE == 2) {
    return spells[2].spellName;
    
  } else if(hitungQ == 0 && hitungW == 0 && hitungE == 3) {
    return spells[3].spellName;
    
  } else if(hitungQ == 1 && hitungW == 2 && hitungE == 0) {
    return spells[4].spellName;
    
  } else if(hitungQ == 0 && hitungW == 3 && hitungE == 0) {
    return spells[5].spellName;
    
  } else if(hitungQ == 0 && hitungW == 1 && hitungE == 2) {
    return spells[6].spellName;
    
  } else if(hitungQ == 1 && hitungW == 1 && hitungE == 1) {
    return spells[7].spellName;
    
  } else if(hitungQ == 2 && hitungW == 0 && hitungE == 1) {
    return spells[8].spellName;
    
  } else if(hitungQ == 2 && hitungW == 1 && hitungE == 0) {
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
console.log(invokeSpell('wqa')); // Combination does not exist