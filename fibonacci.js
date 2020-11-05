
// 1,1,2,3,5,8

function getFibonacci() {
  let firstNumber = 0;
  let followingNumber = 1;
  let arr = [];
  for(var i=0; i<12; i++) {
     let sum =  firstNumber + followingNumber;
     arr.push(sum);
     firstNumber = followingNumber;
     followingNumber = sum;
  }
  console.log('arr', arr);
  return arr;
}

getFibonacci();

// another array logic:

var i;
var fib = []; // Initialize array!

fib[0] = 0;
fib[1] = 1;
for (i = 2; i <= 10; i++) {
  fib[i] = fib[i - 2] + fib[i - 1];
}
console.log(fib[i]);
