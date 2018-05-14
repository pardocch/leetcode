/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    var len = s.length;
    var str = '';
    if (len === 0 || len === 1) {
        console.log(s);
        return s;
    }

    // odd
    for (var current = 0; current < len; ++current) {
        var left = current;
        var right = current;

        while (left > 0 && right < len - 1 && s[left-1] === s[right+1]) {
            --left;
            ++right;
        }
        if (right - left + 1 > str.length) {
            str = s.substring(left, right+1);
        }
    }
    // even
    for (var current = 0; current < len; ++current) {
        if (s[current] === s[current+1]) {
            var left = current;
            var right = current+1;
            // console.log(s[left], s[right]);

            while (left > 0 && right < len - 1 && s[left-1] === s[right+1]) {
                --left;
                ++right;
            }
            // console.log(left, right, str.length);
            if (right - left + 1 > str.length) {
                // console.log(right-left+1);
                str = s.substring(left, right+1);
            }
        }
    }

    // console.log(str);
    return str;
};

console.log(longestPalindrome('ccc'));