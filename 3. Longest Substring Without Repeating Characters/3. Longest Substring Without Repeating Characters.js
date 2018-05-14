/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    var start = 0;
    var max = 0;
    var arr = {};
    for (var current = 0; current < s.length; current++) {
        var nextChar = s[current];
        if (nextChar in arr && arr[nextChar] >= start) {
            start = arr[nextChar] + 1;
            arr[nextChar] = current;
        } else {
            arr[nextChar] = current;
            max = Math.max(max, current + 1 - start);
        }
        // console.log('max number is: ', max);
    }
    return max;
};

console.loglengthOfLongestSubstring('pwwkew');