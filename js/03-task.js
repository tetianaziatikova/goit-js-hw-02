const findLongestWord = function(string) {
    const wordArr = string.split(' '); 
    let longestWord = 0;
    let responseWord;

    for(let i = 0; i < wordArr.length; i = i + 1) {
        if (wordArr[i].length > longestWord) {
        longestWord = wordArr[i].length;
        responseWord = wordArr[i];
        }
    }

    return responseWord;
}
  
  
console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // 'jumped'
  
console.log(findLongestWord('Google do a roll')); // 'Google'
  
console.log(findLongestWord('May the force be with you')); // 'force'
