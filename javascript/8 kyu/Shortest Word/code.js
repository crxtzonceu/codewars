/* Simple, given a string of words, return the length of the shortest word(s).

String will never be empty and you do not need to account for different data types. */

const findShort = str => str.split(" ").sort((a, b) => a.length - b.length)[0].length
// first answers quite a bit long but i did a great solution there


// here is one of the top answer but i made it much shorter
const findShort2 = x => x.split(" ").reduce((a, b) => a.length < b.length ? a : b).length