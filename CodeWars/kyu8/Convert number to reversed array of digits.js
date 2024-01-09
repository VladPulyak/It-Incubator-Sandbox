// Convert number to reversed array of digits
// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

// Example(Input => Output):
// 35231 => [1,3,2,5,3]
// 0 => [0]


function digitize(n) {
    let digits = [];
  
    do {
      digits.push(n % 10);
      n = Math.floor(n / 10);
    } while (n > 0);
  
    return digits;
  }
  