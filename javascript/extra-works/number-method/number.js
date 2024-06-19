// number and math method

const num1 = 400
console.log(num1);

const balance = new Number(100)
console.log(balance.toString());

// method

// ******************************************************************************
// tofixed

 const num2 = new Number(100)
 console.log(num2.toFixed(2));

//  **********************************************************************
// toprecision
// Number of significant digits. Must be in the range 1 - 21, inclusive.

const num3 = 24.678
console.log(num3.toPrecision(3));

// *************************************************************************
// tolocalstring

const num4 = 10000000
console.log(num4.toLocaleString());
console.log(num4.toLocaleString('en-IN'));


