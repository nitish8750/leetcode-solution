// The count-and-say sequence is the sequence of integers with the first five terms as following:

// 1.     1
// 2.     11
// 3.     21
// 4.     1211
// 5.     111221
// 1 is read off as "one 1" or 11.
// 11 is read off as "two 1s" or 21.
// 21 is read off as "one 2, then one 1" or 1211.

// Given an integer n where 1 ≤ n ≤ 30, generate the nth term of the count-and-say sequence. You can do so recursively, in other words from the previous member read off the digits, counting the number of digits in groups of the same digit.

// Note: Each term of the sequence of integers will be represented as a string.


/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
    if(n === null || n.length === 0){
        return "";
    }
    
    var cur = "1";
    var num = 1;
    
    while(n > 1){
        var r = "";
        
        for(var i = 0; i < cur.length; i++){
            if(i < cur.length - 1 && cur[i] === cur[i+1]){
                num++;
            } else {
                r += (num + "" + cur[i]);
                num = 1;
            }
        }
        
        cur = r;
        n--;
    }
    return cur;   
};


// var countAndSay = function(n) {
//     var str = '1';
    
//     for(var i = 1; i < n; i++) {
//         var newStr = '';
//         var count = 1;

//         for(var j = 1; j < str.length; j++) {
//             if(str[j] === str[j - 1]) {
//                 count++;
//             } else {
//                 newStr += count + str[j - 1];
//                 count = 1;
//             }
//         }
        
//         newStr += count + str[j - 1];
//         str = newStr;
//     }

//     return str;
// };

