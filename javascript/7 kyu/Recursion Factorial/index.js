/* This is a kata series that you can only solve using recursion.
##1 - Factorial

In mathematics, the factorial of a non-negative integer n, denoted by n!, is the product of all positive integers less than or equal to n. For example,

5! = 5 * 4 * 3 * 2 * 1 = 120.

The value of 0! is 1.

#Your task

You have to create the function factorial that receives n and returns n!. You have to use recursion. */

// first answer recursion
const factorial = n => {
  if(n < 1) {
    return 1
  } else {
    return n * factorial(n - 1)
  }
};

// one liner recursion

const factOne = n => n < 1 ? 1 : n * factOne(n - 1)


// another one line without using recursion
const fact = n => Array(n).fill(n).map((a, b) => a - b).reduce((x, y) => x * y, 1)
// the initial must be set to 1 since this is multiplication