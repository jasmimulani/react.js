let mydate = new Date()
console.log(mydate);
//  out put:-  2024-06-20T04:55:10.402Z

console.log(mydate.toDateString()); 
// Thu Jun 20 2024
console.log(mydate.toISOString());
// 2024-06-20T04:57:22.325Z
console.log(mydate.toJSON());
// 2024-06-20T04:57:22.325Z
console.log(mydate.toLocaleDateString());
// 6/20/2024
console.log(mydate.toLocaleTimeString());
// 10:27:22 AM
console.log(mydate.toLocaleString());
// 6/20/2024, 10:27:22 AM


 let myydate = new Date (2023 , 0 ,23)
 console.log(myydate.toDateString());
//  Mon Jan 23 2023

let mytimestamp = Date.now()
console.log(mytimestamp);
//  countdown start to 1 jan 1970

let mycreatdate = new Date('01-14-2023')
console.log(mycreatdate.getTime());
console.log(Math.floor (Date.now()/1000));
