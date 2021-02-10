/* This time no story, no theory. The examples below show you how to write function accum:

Examples:

accum("abcd") -> "A-Bb-Ccc-Dddd"
accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt") -> "C-Ww-Aaa-Tttt" */

function accum(s) {
  return s.split('').map((c, i) => (c.toUpperCase() + c.toLowerCase().repeat(i))).join('-');
}



// function accum(s) {
// 	s = s.toLowerCase();
//   let l = s.length;
//   let letter = '';
//   let finalStr = '';
//   for(let i=0; i<l; i++){
//     letter = s[i];
//     for(let j=0; j<=i; j++){
//       if(j == 0){
//         finalStr += letter.toUpperCase();
//       } else {
//         finalStr += letter;
//       }
//     }
//     finalStr += '-';
//   }
//   finalStr = finalStr.slice(0, -1);
//   return finalStr;
// }
