const resultEl = document.getElementById('result');
const lengthEl = document.getElementById('length');
const uppercaseEl = document.getElementById('uppercase');
const lowercaseEl = document.getElementById('lowercase');
const numbersEl = document.getElementById('numbers');
const symbolsEl = document.getElementById('symbols');
const generateEl = document.getElementById('generate');
const clipboardEl = document.getElementById('clipboard');

const randomFunc = {
    lower: getRandomLower,
    upper: getRandomUpper,
    number: getRandomNumber,
    symbol: getRandomSymbol
}

clipboardEl.addEventListener('click', () => {
    const textarea = document.createElement('textarea');
    const password = resultEl.innerText;

    if (!password) { return }

    textarea.value = password;
    document.body.appendChild(textarea);
    // selecciona lo de dentro en el textarea
    textarea.select()
    document.execCommand('copy');
    textarea.remove();
    alert('Password copied to clipboard!')
})

generateEl.addEventListener('click', () => {
    // el signo + parses it to a number
    const length = +lengthEl.value;
    // en inputs sacamos el valor con .value, en checks lo sacamos con .checked
    const hasUpper = uppercaseEl.checked;
    const hasLower = lowercaseEl.checked;
    const hasNumber = numbersEl.checked;
    const hasSymbol = symbolsEl.checked;

    resultEl.innerText = generatePassword(hasUpper, hasLower, hasNumber, hasSymbol, length)
})

function generatePassword(upper, lower, number, symbol, length) {
    let generatedPassword = '';
    const typesCount = lower + upper +  number + symbol;
    // Queremos un array solo con los objetos = true. EL .filter se lee "forEach item retiraremos aquel array donde Object.values(item) == 0 (false)"
    const typesArr = [{lower}, {upper}, {number}, {symbol}].filter(item => Object.values(item)[0])
    
    // Si no hay ningun checked, entonces no devolvemos nada
    if (typesCount === 0) {return ''}
    
    // incrementamos i con typesCount, sea cual sea. Si es 2, sera i + 2 = 0 + 2 = 2
    for (let i = 0; i < length; i+= typesCount) {
        typesArr.forEach(type => {
            // Necesitamos acceder a cada valor true o false
            const funcName = Object.keys(type)[0];
            // console.log(funcName)
            // Como es una función, le ponemos paréntesis al final
            generatedPassword += randomFunc[funcName]()
        })
    }

    const finalPassword = generatedPassword.slice(0, length)
    return finalPassword;
}

// En ASCII la a minuscula es la 97. Mas 26 letras del alfabeto
function getRandomLower() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97)
}

// La A mayuscula es 65
function getRandomUpper() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65)
}

// Random number en string de 0 a 9. El 0 en ascii es 48
function getRandomNumber() {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48)
}

function getRandomSymbol() {
    const symbols = '!@#$%^&*(){}[]=<>/,.'
    return symbols[Math.floor(Math.random() * symbols.length)]
}
