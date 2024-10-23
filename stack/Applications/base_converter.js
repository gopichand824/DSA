const Stack = require('../stack.js');

function baseConverter(decimal , base) {
    if (decimal < 0 || base < 2 || base > 16) {
        return 'Invalid input';
    }
    if (decimal ===0) {
      return 0;
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
for(let i = 0 ; i < 10; i++) {
   console.log(`decimal ${i} to \n\tbinary     :${baseConverter(i, 2)} \n\toctal      :${baseConverter(i, 8)} \n\thexadecimal:${baseConverter(i, 16)}\n`);

}