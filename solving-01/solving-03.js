
// Problem 03 : Virus in my Array

function deleteInvalids(numbers) {
    if (!Array.isArray(numbers)) {
        return '"you should input typeof array"';
    }
    let numberArray = [];
    for (const number of numbers) {
        if (typeof number === 'number' && !isNaN(number)) {
            numberArray.push(number);
        }
    }
    return numberArray;
}
const array ={num: [ 1 , 2 , 3 ]};
console.log(deleteInvalids(array));