
const checkForSpam = function(message) {
    let arr = ['spam', 'sale'];
    message = message.toLowerCase();
    let result = false;
    
    for (let word of arr) {
        if (message.indexOf(word) > -1) {
            result = true;
            break;
        }
    }
    return result;
}; 

 
console.log(checkForSpam('Latest technology news')); // false
  
console.log(checkForSpam('JavaScript weekly newsletter')); // false
  
console.log(checkForSpam('Get best sale offers now!')); // true
  
console.log(checkForSpam('[SPAM] How to earn fast money?')); // true

