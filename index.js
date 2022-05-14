/* Truncate a string (first argument) if it is longer than the given maximum string length (second argument). Return the truncated string with a ... ending. */

function truncateString(str, num) {
  
 var output=str.substring(0, num )
 if (output.length<str.length){
   output +="..."
 }
  return output ;
}

var result=truncateString("A-tisket a-tasket A green and yellow basket", 10);
console.log(result)