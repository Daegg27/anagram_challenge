// Can you translate this driver code to unit tests?

var ana = require("./characterMatch");

console.log(ana.isCharacterMatch('charm', 'march'));
console.log(ana.isCharacterMatch('zach', 'attack'));
console.log(ana.isCharacterMatch('CharM', 'mARcH'));
console.log(ana.isCharacterMatch('abcde2', 'c2abed'));

console.log("This test is for the challenge quesiton");
console.log(ana.isCharacterMatch('Anna Madrigal', 'A man and a girl') === true);
