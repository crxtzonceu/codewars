/*  check if the time(string)  is valid or not(true or false)
    Example:
    "26:89" => false
    "13:30" => true
*/


function validTime(str) {
  //  write code here. 
  const num = str.split(":").map(Number)
  return num[0] >= 0 && num[0] <= 23 && num[1] >= 0 && num[1] <= 59
}