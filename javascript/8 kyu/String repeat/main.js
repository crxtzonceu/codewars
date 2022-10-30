/* Write a function that accepts an integer n and a string s as parameters, and returns a string of s repeated exactly n times.

Examples (input -> output)
6, "I"     -> "IIIIII"
5, "Hello" -> "HelloHelloHelloHelloHello" */

const repeatStr = (x, y) => Array(x).fill(y).join('')
// i am already proud with my answer but ill still include the top answer since i dont know that that method exist

const repeatStr2 = (a, b) => b.repeat(a)