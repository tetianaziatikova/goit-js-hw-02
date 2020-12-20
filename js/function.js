//Есть три вида функций

//=================== function expression ===================

// a, b - параметры. add - краткое название функции(оязательно), 
//по ней дальше делается вызов функции. addTwoNumbers - полное название функции (необязательно, но хорошая практика), 
//дальше не испоьзуется, но обясняет суть функции, что она делает.


//1.
const add = function addTwoNumbers(a, b) {

}

add(1, 4); // 1, 4 аргументы

//2.
const add = function addTwoNumbers (a, b) {
    console.log (a+b);
}

const result = add (1, 4); // что б увидеть результат добавляем const result =
console.log('result', result) // и обратимся к этому результату и выведем его. Результат будет underfind, так как не указан return. Если бы underfind не былобы то исплнится условие которое может быть указано дальше.  

//3.
const add = function addTwoNumbers (a, b) {
    console.log (a + b);
    const res = a + b;
    return res // результат return записывается в const add.
}

const result = add (1, 4); // и когда мы вызываем фунцию тут то в add будет записан результат a + b тоисть 5
console.log('result', result)

if (result) {
    console.log('start !!!'); // если сработает return, то выполнится  ето условие и выведется start !!!
}

//4. 
const add = function addTwoNumbers (a, b) {
    console.log (a + b);
    const res = a + b;
    if (res >= 5) {
        return res
    }
    return 0; //если res < 5 
}

const result = add (1, 4); 
console.log('result', result);

if (result) {
    console.log('start !!!'); 
}


//5.  если нужно функцию запустить еще раз
const add = function addTwoNumbers (a, b) {
    console.log (a + b);
    const res = a + b;
    if (res >= 5) {
        return res
    }
    return 0; //если res < 5 
}

const result = add (1, 4); 
console.log('result', result);

const result2 = add (1, 9);//нужно скопировать и присоить новую переменную
console.log('result2', result2);

// if (result) {
//     console.log('start !!!'); 
// }

//=================== function declaration ===================
// отличие в том, что исользуем только имя add, а также означает что мы обратились к ней до момента ее создания
// !! лучше не использовать
//6.  
const result = add (1, 4); 
console.log('result', result);

const result2 = add (1, 9);//нужно скопировать и присоить новую переменную
console.log('result2', result2);

function add (a, b) {
    console.log (a + b);
    const res = a + b;
    if (res >= 5) {
        return res
    }
    return 0; //если res < 5 
}


//=================== function без имени ===================

// функция должна запуститься при любых обстоятельствах, в определеный момент времени
//7.
const add = function (a, b) {
    console.log (a + b);
    const res = a + b;
    if (res >= 5) {
        return res
    }
    return 0; //если res < 5 
}

const result = add (1, 4); 
console.log('result', result);

const result2 = add (1, 9);//нужно скопировать и присоить новую переменную
console.log('result2', result2);


(function(){
    console.log('start 1');
    console.log('start 2');
})();// последние круглые скобки запускают функцию. если забыть поставить ; в конце то исполнения кода ниже заблокируется, и код не будет исполнятся. 

//8. если нужно создать функции независимые друг от друга, но испольнятся они доолжны одновременно, можно использовать бе имяную функци и при это можно задать ей кокето имя.
const word = function startShowWord() {
    console.log('word');
}
const num = function startShowNumber(){
    console.log('word');
}

(function startAllFunction() {
    word();
    num();
})();


//=================== function без имени ===================

// 9.
const add = function (a = 0, b = 0) { //Но что сработала функция показала результат 4, нужно присвоить ей дефолтные значения
    if (typeof a !== 'string' && typeof b !== 'string') {
        return;
    }

    const res = a + b;
    if (res >= 5) {
        return res
    }
    return 0; //если res < 5 
}

const result = add (4, 3); // если один аргумент он запишется на место а. 
console.log('result', result);


//10. сбор данных

const add = function (param, ...rest) { // param - это один масив, rest - другой. Если будет только rest то все будет в одном масиве
    console.log(param);
    console.log('rest', rest);
};

const result = add([1, 2, 3], 4, 5, 6, 7, 8);
console.log('result', result);

//11. одна и таже запись для for и for of

const add = function (...rest) { 
    console.log('rest', rest);


    // for (let index = 0; index < rest.length; index++) { // сплюсовать индексы
    //     const element = rest[index];
    //     console.log('element', element);
    // }   

    // for (let num of rest) { // условия которые мы видим в for тут не видны, спрятаны
    //     console.log('num', num);
    // }
};

const result = add([1, 2, 3], 4, 5, 6, 7, 8);
console.log('result', result);

//12. давайте посчитаем

const add = function (...rest) { 
    console.log('rest', rest);
    let total = 0; // инициализация

    for (let num of rest) { 
        console.log('num', num);
        total = total + num; // наполнение
    }
    return total; // вывод результата
};

const result = add([1, 2, 3], 4, 5, 6, 7, 8);
console.log('result', result); // эти две строчки можно повторять много раз изменяя аргументы и переменные. Функция срабатывать буде одинаково.

//13. выводим инф. через prompt

let getUserData;
const mass = []; //создаем масив

do {
    getUserData = prompt('enter ....');
    mass.push(Number(getUserData));
} while(getUserData !== null);// нужно сначала наполнить масив



const add = function (rest) { 
    // console.log('getUserData', getUserData); // выводятся данные которые ввел пользователь
    let total = 0; // инициализация

    for (let num of rest) { 
        // console.log('num', num); 
        total = total + num; // наполнение
    }
    return total; // вывод результата
};

const result = add(mass);
console.log('result', result); //выводяться результаты 

