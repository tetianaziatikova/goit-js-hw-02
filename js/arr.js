const findName = 'Poly'


const arr = ['Mango', 'Poly'];// масив
console.log('arr', arr);// показать масив
console.log('arr', arr.length); // показать длину
console.log('arr', arr.sort()); // показать сортирование
console.log('arr', arr.indexOf('Poly')); // показать индекс

console.log('arr', arr.includes('Poly')); // показать указаное

arr.unshift('Poly'); // добавить елемент в начало масива
console.log('arr', arr);

arr.shift(); //удаляет, сколько раз будет визван, столько раз и будет удаление. Масив остается тот же, удаляет индекси
console.log('arr', arr);


const newArr = arr.slice(0, 1); // не мутирует. извлекает елемент с подмножества масивов и добавлять их в новый масив. Начиная с 0 по 1, но не включая 1.
console.log('newArr', newArr);

const newArrs = arr.splice(0, 1); // мутирует. изменяет исходный масив.  
console.log('newArrs', newArrs);

const newArrss = arr.splice (0, 0, 'test');//Начни с 0 по 0 (тоисть ничего не удаляй) и добавь test. Может доставить внутрь масива елемент.
console.log('newArrss', newArrss);

const newArrsss = arr.splice (0, 1, 'test');//Начни с 0 по 1 (тоисть удали 1) и добавь test (получится что на место 1). Может заменить внутри масива елемент.
console.log('newArrsss', newArrsss);


//если хотим использовать  splice, но не хотим что б исходный масив был порезан
const withoutMutationArr = arr.slice() // slice достанит все елементы с масива arr и положет их в новый масив withoutMutationArr. И обращаться нужно будет не к arr, а к withoutMutationArr.

withoutMutationArr.splice(0, 1, 'test');
console.log('withoutMutationArr', withoutMutationArr);

//обединить масивы

const a = [1, 2, 3, 4, 5];
const b = [9, 8, 7, 6];

// с помощью concat, мало используется
const x = a.concat(b); // к масиву а добавить масив b

const x = [a, b]; //масив в масиве


// с помощь ...spred, в основном используется 
const x = [...a, ...b]; // вынимает все елементы с масива а, и вкладывает в новый масив х, вынимает все елементы с масива b и вкладывает в масив х.

