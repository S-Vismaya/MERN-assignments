/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  let m = new Map();
  for (let i of str1) {
    m.set(i.toLowerCase(), (m.get(i.toLowerCase()) || 0) + 1);
    console.log(i);
  }
  for (let i of str2) {
    console.log(i);
    if (!m.has(i.toLowerCase())) return false;
    else if (m.get(i.toLowerCase()) === 0) return false;
    else m.set(i.toLowerCase(), m.get(i.toLowerCase()) - 1);
  }
  for(let i of m.values()){
    if(i!==0)return false;
  }
  return true;
}

module.exports = isAnagram;
