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

function remove(s) {
  return s.replace(/!/g, '') + s.replace(/[^!]/g, '');
}