/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    var reverse_arr = [];
    var stringX = x.toString();
    var len = stringX.length;
    switch (stringX[0]) {
        case '-':
            for (var i = len-1; i >= 1; i--) {
                reverse_arr[len-i-1] = stringX[i];
            }
            if (reverse_arr[0] == 0) {
                reverse_arr[0] = '';
            }
            var result = parseInt(`-${reverse_arr.join('')}`);
            if (result < -Math.pow(2,31) || result > Math.pow(2,31)-1) return 0;
            return result;
        break;
        case '0':
            return parseInt(stringX);
        break;
        default :
            for (var i = len-1; i >= 0; i--) {
                reverse_arr[len-i-1] = stringX[i];
            }
            if (reverse_arr[0] == 0) {
                reverse_arr[0] = '';
            }
            var result = parseInt(`${reverse_arr.join('')}`);
            if (result < -Math.pow(2,31) || result > Math.pow(2,31)-1) return 0;
            return result;
        break;
    }
};