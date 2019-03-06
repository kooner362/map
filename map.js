var words = ["ground", "control", "to", "major", "tom"];

function map(array, callback) {
  var result = [];
  array.forEach(function(element) {
    result.push(callback(element));
  });
  return result;
}

var a = map(words, function(word) {
  return word.length;
});

var b = map(words, function(word) {
  return word.toUpperCase();
});

var c = map(words, function(word) {
  return word.split('').reverse().join('');
});

console.log(a)
console.log(b)
console.log(c)
/*
EXPECTED OUTPUT
[6, 7, 2, 5, 3]

[ "GROUND", "CONTROL", "TO", "MAJOR", "TOM" ]

[ 'dnuorg', 'lortnoc', 'ot', 'rojam', 'mot' ]
*/
