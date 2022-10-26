// This kata is about multiplying a given number by eight if it is an even number and by nine otherwise.

const simpleMultiplication = x => x % 2 ? x * 9 : x * 8
// My answer tho


const simpleMultiplication1 = x => x * (x % 2 ? 9 : 8)
// Much cleaner i think