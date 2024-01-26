// 1]
                  //while loop
                  // let i=10;

                  //     while(i >= 0){
                  //         document.write(i + "<br>")
                  //           i--;
                  // }

//do while loop
                   // let k=10

                   //   do{
                   //     document.write(k+"<br>")
                   //       k--;
                   //   }while(k>=0)

//for loop
                   // let j=10

                   // for(j; j>=0; j--)
                   // {
                   //     document.write(j+"<br>")
                   // }

// 2]

//while loop
                  // let i,sum=0
                  // i=1

                  //    while(i <=10){
                  //       sum=sum+i
                  //       i++;
                  //    }
                  // document.write(sum)

// do while loop
                   // let k,sum=0
                   // k=1
                   // do{
                   //    sum=sum+k
                   //    k++
                   // }while(k<=10)
                   // document.write(sum)


// //for loop
//                                        var sum=0
//                                         let j=1;
//                                           for(j; j<=10; j++){
//                                              sum=sum+j  
//                                           }
//                                           document.write(sum)

//    3]
//1.]while loop
                                 // let n1=6
                                  // let i1=1
                                  // while(i1<=10)
                                  // {
                                  //     document.write(n1 + "*" +i1 + "=" + n1*i1 + "<br>" )
                                  //     i1++
                                   // }
 //2.]do while loop
                                //  let n2=7
                                //   let i2=1
                                //   do{
                                //     document.write(n2 + "*"+i2+"=" + n2* i2+"<br>")
                                //      i2++
                                //   }while(i2<=10)
                                 
    
//3.]for loop

                        // let n=5
                        // let i=1
                        // for(i; i<=10; i++)
                        // document.write(n +"*"+i+"=" + n * i+"<br>")

         
// 4]

// 5]
//  while

// let n1=0, n2=1 ,next_num, i=1
// let num =10
// document.write("fibonacci series:")
// while(i<=num)
// {
//      document.write("<br>"+n1)
//      next_num=n1+n2
//      n1=n2
//      n2=next_num
//       i++
// }

// do-while

// let n1=0, n2=1 ,next_num, i=1
// let num =10
// document.write("fibonacci series:")
// do{
//     document.write("<br>"+n1)
//     next_num=n1+n2
//     n1=n2
//     n2=next_num
//     i++
// }while(i<=num)

// for-loop

// let n1=0, n2=1 ,next_num, i=1
// let num =10
//  document.write("fibonacci series:")
//  for(i=1; i<=num; i++)
//  {
//     document.write("<br>"+n1)
//         next_num=n1+n2
//         n1=n2
//         n2=next_num
//  }


// 6]

//  while loop
                // let j=5
                // let k=1
                // while(j >=1){
                //     k *=j;
                //     j--
                // }
                // document.write(k)

//  do-while
                    //   let j=5
                    //   let k=1
                    // do{
                    //   k *=j;
                    //       j--
                    //   }  while(j >=1)
                    //   document.write(k)
  
//  for loop
                        //  let i=5
                        //  let n=1
                        //  for(i; i>=1; i--){
                        //     n*=i
                        //  }
                        //  document.write(n)

//  7]
// 8]
 //1.]while loop
                        // const n=2;
                        // const power=5;
                        // let num=2, i=0;

                        //     while(i<power){
                        //         document.write(num + "<br>");
                        //         num  *= n;
                        //         i++;
                        //     }

//2.]do while loop
                      // const n=2;
                      // const power=5;
                      // let num=2, i=0;

                      // do{
                      //     document.write(num + "<br>");
                      //     num  *= n;
                      //     i++; 
                      // }while(i<power)

//3.]for loop
                   //    const n=2;
                   //    const power=5;
                   //    let num=2;
                   //         for(let i=0; i<power; i++){
                   //             document.write(num + "<br>");
                   //             num  *=n;
                   //        }

//  9]                  
// 1.while
// let n=5 ,b
// let a=1
// while(a<=n)
// {
//      b=1
//      while(b<=a)
//      {
//           document.write(" * ")
//           b+=1
//      }
//      document.write("<br>")
//      a+=1
// }

// 2.do while
// let n = 5, b;
// let a = 1;
// do {
//   b = 1;
//   do {
//      document.write(" * ");
//      b += 1;
//   } while (b <= a);
//    document.write("<br>");
//    a += 1;
// } while (a <= n);

// 3.for
// let n=5
// for(let a=1; a<=n; a++)
// {
//      for(let b=1; b<=a; b++)
//      {
//           document.write(" * ")
//      }
//      document.write("<br>")
// }



/* break statement */
// 10]
// let a=[0,1,2,3,4,5,6,7,8,9]
// let user_number =5
// for(let i=1; i<=a.length; i++)
// {
//      if(a[i] === user_number)
//      {
//           document.write("number index:",i)
//           break;
//      }
// }



// 11.find the first odd number in a sequence using a while loop and break statement

// 12.cheack if a number is prime using a for loop and break statment
// {
//      let number =29;
//      let i=2
//         for ( i = 2; i < number; i++) {
//              if (number % i == 0) {
//                  document.write(number+" This number is not prime number");
//                  break;
//              }
//          }
//          if (i == number) {
//              document.write(number+" This number is a prime number");
//          }    
//      }
     // 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97


// 13.loop with a conditional break statmrnt based on user input


/* continue statement */
// 14. skip printing odd number using a for loop and continue satatment
// for(let i=0; i<=15; i++)
// {
//      if(i %2 != 0)
//      {
//           continue
//      }
//      document.write(i + "<br>")
// }

// 15.skip multiples of 3 using a while loop and continue statement
// let i=0
// while(i<=21)
// {
//      if(i %3 !=0)
//      {
//           document.write(i + "<br>")
//      }
//      i++
//      continue
// }

//16.print even number in a specific range using a for loop and continue statement


/* 17.Skip numbers divisible by 5 using a do-while loop and continue statement */
// {
//     let i = 0,number=20
//     do {
//          i++;
//          if (i % 5 == 0) {
//           continue;
//       }
//       document.write(i + "<br>");
//     } 
//     while(i<number);
//  }
