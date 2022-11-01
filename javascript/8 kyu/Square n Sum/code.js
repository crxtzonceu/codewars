/* Complete the square sum function so that it squares each number passed into it and then sums the results together.

For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9. */

const squareSum = x => x.length ? x.reduce((a, b) => a + b ** 2, 0) : 0


// this is much more shorter that i made before submitting

// you can return zero on empty arrays because of the reduce 0 initial value

const squareSum1 = x => x.reduce((a, b) => a + b * b, 0)