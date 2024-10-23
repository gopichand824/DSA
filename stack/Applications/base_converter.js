const Stack = require('../stack.js');

function baseConverter(decimal , base) {
    if (decimal < 0 || base < 2 || base > 16) {
        return 'Invalid input';
    }
     const digits = '0123456789ABCDEF';
     let baseStr = '';
     let result = new Stack();

     while (decimal > 0 ) {
        result.push(Math.floor(decimal % base));
        decimal = Math.floor(decimal / base);
     }

     while (!result.isEmpty()){
        baseStr += digits[result.pop()];
     }

     return baseStr;
}

// Test the function

console.log(baseConverter(200, 16)); 