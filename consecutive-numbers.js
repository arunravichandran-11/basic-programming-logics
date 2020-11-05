const arrayInput = [1,2,3,4,5,6,7,8];

const output = [3, 7, 11];

const addConsecutiveNumber = (arr) => {
  let result = [];

  for (let i = 0; i < arr.length; i=i+2) {
     console.log(arr[i]);
    let sum = arr[i] + arr[i+1];
    result.push(sum);
  }

  return result;
}

console.log(addConsecutiveNumber(arrayInput));
// Other way is sort and then find the first element and last element.
