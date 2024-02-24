"use strict";
//
function checknumber(number) {
    if (number > 0) {
        return "the number is positive.";
    }
    else if (number < 0) {
        return "the number is negative.";
    }
    else {
        return "the number is zero";
    }
}
//now check this if this function works.
console.log(checknumber(2)); //positive
console.log(checknumber(-5)); //negative
console.log(checknumber(0)); //zero
