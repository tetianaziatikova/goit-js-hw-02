let input;
const numbers = [];
let total = 0;


while (input !== null){
    input = prompt('Введите число');

    if (input === null) {
        for(const num of numbers) {
            total = total + num;
            
        }

        console.log(`Общая сумма чисел равна ${total}`);
        continue;
    }

    let inputNum = Number(input);
    if(Number.isNaN(inputNum)) {
        alert('Было введено не число, попробуйте еще раз');
    } else {
        numbers.push(inputNum);
    }
}

console.log(numbers);



