//math pi

console.log(Math.PI);
//***************************************************** 
// absmethod
//  convert to negative value in positive
console.log(Math.abs(-4));

// ***********************************************
// round method
console.log(Math.round(4.7));

// ------------------------------------
//ceil
//  4.0 thi 1 point bhi uar hoy toy original number maa +1 kare
console.log(Math.ceil(4.0));

// ----------------------------------
// floor
// 4 thi upar 1000 bhi karo to bhi 4 means 4
console.log(Math.floor(4.7));

// ***********************************************
// sqrt
console.log(Math.sqrt(36));

// *************************************************
// pow
console.log(Math.pow(2,4));
//  *****************************************
// min
     console.log(Math.min(0,7,1));

// **************************************
// max
console.log(Math.max(1,10,7));

// ************************************************************
// random
//  value always come to be bettwen 0 and 1
console.log(Math.random());
// * 10 means shift 0 to  left
// ex result  0.12343676 
// *10 :- 1.0909099898
// -------------------------------------
// +1
//  sapose value come to be 0.1 , 0.4 that time output is 0 so avoid this problem +1 is used
console.log((Math.random()*10) +1);
console.log( Math.floor(Math.random()*10) +1); 
// ----------------------------------------------
// incase we expected max or nim value in random method that time this method  work
const  min=10
const max=20
console.log(Math.floor (Math.random() * (max - min +1)) + min)




