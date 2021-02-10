function accum(s) {
	s = s.toLowerCase();
  let l = s.length;
  let letter = '';
  let finalStr = '';
  for(let i=0; i<l; i++){
    letter = s[i];
    for(let j=0; j<=i; j++){
      if(j == 0){
        finalStr += letter.toUpperCase();
      } else {
        finalStr += letter;
      }
    }
    finalStr += '-';
  }
  finalStr = finalStr.slice(0, -1);
  return finalStr;
}
