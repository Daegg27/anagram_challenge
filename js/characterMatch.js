exports.isCharacterMatch = function(string1, string2) {

    let sortedStr1 = string1.toLowerCase().split("").sort().join("");
    let sortedStr2 = string2.toLowerCase().split("").sort().join("");
    console.log(sortedStr1);
    console.log(sortedStr2);

    if (string1.length !== string2.length)
    {
        return false;
    }
    else if (sortedStr1 == sortedStr2)
    {
        return true;
    }else{
        return false;
    }

};
// console.log(exports.isCharacterMatch("adkwo", "kido"));