'use strict';

let insertShiftArray = [1, 2, 3, 4];

const NEWVALUE = 5;

let arrayLength = Math.floor(insertShiftArray.length / 2);

insertShiftArray.splice(2, 0, 5);

console.log(insertShiftArray);