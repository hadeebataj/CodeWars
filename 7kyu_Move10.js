/* Move every letter in the provided string forward 10 letters through the alphabet.
If it goes past 'z', start again at 'a'.
Input will be a string with length > 0. */

function moveTen(s){
  let newAlpha = '';
  if(s.length !== 0 ){
    for(let i=0; i<s.length; i++){
      s = s.toLowerCase();
      if((s.charCodeAt(i) + 10) > 122) {
        let temp = 122 - s.charCodeAt(i);
        let t = 10 - temp;
        let char = 96 + t;
        newAlpha += String.fromCharCode(char) ;
      }
      else if ((s.charCodeAt(i) + 10) <= 122 && s.charCodeAt(i) >= 97) {
        let char = s.charCodeAt(i) + 10;
        newAlpha += String.fromCharCode(char) ;
      }
    }
  }
  return newAlpha;
}
