const array = [37,-5,-15,-37,5,15]

const findMinMax = (arr) => {
  let min = arr[0], max = arr[0]; //assuming

  for (let i = 1; i < arr.length; i++) {
    let value = arr[i];
    min = (value < min) ? value : min;
    max = (value > max) ? value : max;
  }

  return [min, max];
}

console.log(findMinMax(array);

// Other way is sort and then find the first element and last element.
