/* Given a month as an integer from 1 to 12, return to which quarter of the year it belongs as an integer number.

For example: month 2 (February), is part of the first quarter; month 6 (June), is part of the second quarter; and month 11 (November), is part of the fourth quarter. */

const quarterOf = x => x <= 3 ? 1:
                       x <= 6 ? 2:
                       x <= 9 ? 3:
                       4


const quarterOf2 = x => {
  if(x <=  3)  {
    return 1
  } else if(x <= 6){
    return 2
  } else if(x <= 9){
    return 3 
  } else {
    return 4
  }
}


//  top answer uses Math.ceil(month/3)