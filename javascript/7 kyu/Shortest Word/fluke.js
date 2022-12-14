/* Simple, given a string of words, return the length of the shortest word(s).

String will never be empty and you do not need to account for different data types.

 */

const findShort = x => x.split(" ").reduce((a, b) => a.length < b.length ? a : b).length