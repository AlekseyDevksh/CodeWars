/*
Exclamation marks series #8: Move all exclamation marks to the end of the sentence (JavaScript)

Description:

Move all exclamation marks to the end of the sentence
Examples

remove("Hi!") === "Hi!"
remove("Hi! Hi!") === "Hi Hi!!"
remove("Hi! Hi! Hi!") === "Hi Hi Hi!!!"
remove("Hi! !Hi Hi!") === "Hi Hi Hi!!!"
remove("Hi! Hi!! Hi!") === "Hi Hi Hi!!!!"
Note

*/

function remove(s){
  var newArr = [],
      arrSign = [],
      i = 0;
  var arr = s.split('').join('');

  for (i = 0; i < arr.length; i++){
    if (arr[i] !== "!") {
      newArr.push(arr[i]);
    } else {
        arrSign.push("!");
    }
  }

  return newArr.join('') + arrSign.join('');
}