/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
    var reg = new RegExp('^'+p+'$');
    return reg.test(s);
};