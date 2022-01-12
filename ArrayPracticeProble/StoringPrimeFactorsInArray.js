var n=20
const factors = [];
let divisor = 2;

while (n >= 2) {
  if (n % divisor == 0) {
    factors.push(divisor);
    n = n / divisor;
  } else {
    divisor++;
  }
}
factors.forEach(function(entry){

console.log(entry)
})