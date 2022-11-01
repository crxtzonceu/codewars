/* The string has a length greater or equal to one and contains only letters from ato z.

Examples:
s="aaabbbbhaijjjm"
printer_error(s) => "0/14"

s="aaaxbbbbyyhwawiwjjjwwm"
printer_error(s) => "8/22" */


const printerError = x => {
  const arr = ['a', 'b', 'c','d', 'e', 'f','g', 'h', 'i','j', 'k', 'l','m']
  x = x.split('')
  let count = 0
  for(err of x) {
    if(! arr.includes(err)) {
      count++
    }
  }
    return `${count}/${x.length}`
}

// My mistake here is my return statement.
// i didn't notice that it is in the scope of the for loop