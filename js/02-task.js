const calculateEngravingPrice = function(message, pricePerWord) {
    console.log(message.split(' '));
    const count = message.split(' ').length;
    return count * pricePerWord
} 

console.log(
    calculateEngravingPrice(
      'Proin sociis natoque et magnis parturient montes mus',
      10,
    ),
); 
  
console.log(
    calculateEngravingPrice(
      'Proin sociis natoque et magnis parturient montes mus',
      20,
    ),
); 
  
console.log(
    calculateEngravingPrice('Donec orci lectus aliquam est magnis', 40),
); 
  
console.log(
    calculateEngravingPrice('Donec orci lectus aliquam est magnis', 20),
); 
  