function isDivisible(divisee, divisor) {
  // your code here
  return (divisee%divisor===0)?true:false; 
}

/* From here down, you are not expected to 
   understand.... for now :)  
   
   
   Nothing to see here!
   
*/

// tests

function testIsDivisible() {
  if (isDivisible(10, 2) && !isDivisible(11, 2)) {
    console.log('SUCCESS: `isDivisible` is working');
  } else {
    console.log('FAILURE: `isDivisible` is not working');
  }
}

testIsDivisible();
