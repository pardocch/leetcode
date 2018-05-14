/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
    var temp = str.split(" ");
    for (var index = 0; index < temp.length; index++) {
        var toInt = parseInt(temp[index]);
        if (temp[index] == '' && ((index == temp.length-1) && temp[index] == '')) return 0;
        else if (temp[index] == '' && index <= temp.length-1) continue;
        else {
            if (isNaN(toInt)) return 0;
            else if (toInt < -Math.pow(2,31)) return -Math.pow(2,31);
            else if (toInt > (Math.pow(2,31)-1)) return (Math.pow(2,31)-1);
            else return toInt;
        }
        return 0;
    }
};

console.log(myAtoi('42'));
console.log(myAtoi('   -42'));
console.log(myAtoi('4193 with words'));
console.log(myAtoi('words and 987'));
console.log(myAtoi('-91283472332'));
console.log(myAtoi("   +0 123"));
console.log(myAtoi(""));
console.log(myAtoi(" "));
console.log(myAtoi("  "));
console.log(myAtoi("2147483648"));