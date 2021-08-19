//Dom Elements
//const resultEL = document.getElementById('result');
const lengthEL = document.getElementById('length');
const uppercaseEL = document.getElementById('uppercase');
const lowercaseEL = document.getElementById('lowercase');
const numEL = document.getElementById('num');
const symbolsEL = document.getElementById('symbols');
const generateEL = document.getElementById('generate');
const clipboardEL = document.getElementById('clipboard');

const randomFunc = {
    lower: getRandomLower, 
    upper: getRandomUpper,
    number: getRandomNum,
    symbol: getRandomSymbol
}; 

generateEL.addEventListener('click', () => {
    const length = lengthEL.value;
    console.log(length);
})
// Generator Functions

function getRandomLower() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}
function getRandomUpper() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}
function getRandomNum() {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}
function getRandomSymbol() {
    const symbols = "!@#$%^&*?,.";
    return symbols[Math.floor(Math.random() * symbols.length)]
}


console.log(getRandomSymbol())
