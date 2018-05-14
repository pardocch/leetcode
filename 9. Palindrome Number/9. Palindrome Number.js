/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    var reverse = 0;
    var temp = x;
    if (x < 0 || (x % 10 == 0 && x != 0)) return false;
    while (x > 0) {
    	reverse = x % 10 + reverse * 10;
        x = Math.floor(x / 10);
    }
    console.log(temp, reverse);
    return temp == reverse;
};

console.log(isPalindrome(12));