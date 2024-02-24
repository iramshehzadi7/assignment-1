"use strict";
// to check if a number is even or odd
function checkEvenOrOdd(number) {
    if (number % 2 === 0) {
        return "the number is even.";
    }
    else {
        return "the number is odd";
    }
}
// now check if this is correct
console.log(checkEvenOrOdd(12176543)); //odd
console.log(checkEvenOrOdd(73456789)); //odd
console.log(checkEvenOrOdd(1097532)); //even
console.log(checkEvenOrOdd(1854)); //even....
