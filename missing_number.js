
var a = [5,4,1,8,3];
var missing = [];

for (var i = 1; i <= 10; i++) {
  if (a.indexOf(i) == -1) {
    missing.push(i);
  }
}
console.log(missing);
