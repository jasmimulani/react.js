// concate

const arr1 =[1,2,3,4,5];
const arr2 =[6,7,8,9,10];
const arr3 =[11,12,13,14,15];

const array = arr1.concat(arr2 , arr3)
console.log(array);

// ****************************************************************
// entries :- add the element in aaray with position
const arr4 =['a','b','c']
console.log(arr4.entries().next().value);

// **************************************************************
// fill
// syntex:
// fill(value)
// fill(value, start)
// fill(value, start, end)

const arr5 =[1,2,3,4,5]
console.log(arr5.fill(9));
// console.log(arr5.fill(10 , 3));
console.log(arr5.fill(11 ,0,3));

// **********************************************************************
// filter
// array uapr j aargument pass kare ne ana par thi new array creat kare

const words =[]