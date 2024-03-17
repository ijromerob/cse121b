/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */

function add (number1, number2){
    return number1 + number2;
}

function addNumbers(){
    let addNumber1 = Number(document.querySelector('#add1').value);
    let addNumber2 = Number(document.querySelector('#add2').value);
    document.querySelector('#sum').value = add(addNumber1,addNumber2);
}

document.querySelector('#addNumbers').addEventListener('click',addNumbers);
/* Function Expression - Subtract Numbers */

const substract = function (substract1, substract2){
    return substract1 - substract2;
}

const difference = function(){
    let substract1 = Number(document.querySelector('#subtract1').value);
    let substract2 = Number(document.querySelector('#subtract2').value);
    document.querySelector('#difference').value = substract(substract1,substract2);
} 

document.querySelector('#subtractNumbers').addEventListener('click',difference);

/* Arrow Function - Multiply Numbers */
const multiply = (factor1, factor2) => factor1*factor2;

const multiplyNumbers = () => {
    let factor1 = Number(document.querySelector('#factor1').value);
    let factor2 = Number(document.querySelector('#factor2').value);
    document.querySelector('#product').value = multiply(factor1,factor2);
}

document.querySelector('#multiplyNumbers').addEventListener('click',multiplyNumbers);
/* Open Function Use - Divide Numbers */
function divide(dividend, divisor){
    return dividend/divisor;
}

const divideNumbers = function(){
    let dividend = Number(document.querySelector('#dividend').value);
    let divisor = Number(document.querySelector('#divisor').value);
    document.querySelector('#quotient').value = divide(dividend,divisor);
}

document.querySelector('#divideNumbers').addEventListener('click',divideNumbers);

/* Decision Structure */
document.querySelector('#getTotal').addEventListener('click',() =>{
    let subtotal = Number(document.querySelector('#subtotal').value);
    if (document.querySelector('#member').checked)
    {
        subtotal *= 0.8;
    }
    document.querySelector('#total').innerText = `$ ${subtotal.toFixed(2)}`;
})

/* ARRAY METHODS - Functional Programming */
/* Output Source Array */
let numbersArray = [1,2,3,4,5,6,7,8,9,10,11,12,13];
document.querySelector('#array').innerText = numbersArray;

/* Output Odds Only Array */
document.querySelector('#odds').innerHTML = numbersArray.filter((number) => number%2 === 1);
/* Output Evens Only Array */
document.querySelector('#evens').innerHTML = numbersArray.filter((number) => number%2 === 0);
/* Output Sum of Org. Array */
document.querySelector('#sumOfArray').innerHTML = numbersArray.reduce((sum,number) => sum+number);
/* Output Multiplied by 2 Array */
document.querySelector('#multiplied').innerHTML = numbersArray.map((x) => x*2);
/* Output Sum of Multiplied by 2 Array */
document.querySelector('#sumOfMultiplied').innerHTML = numbersArray.map((x) => x*2).reduce((sum,number) => sum+number);
