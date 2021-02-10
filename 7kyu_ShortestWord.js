/* Simple, given a string of words, return the length of the shortest word(s).
String will never be empty and you do not need to account for different data types. */

function findShort(s){
  let pLength = 10;
  s.split(' ').map((r, i) => ((r.length < pLength) ? pLength = r.length : pLength));
  return pLength;
}
