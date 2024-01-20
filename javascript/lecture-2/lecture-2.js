/* javascript operators */

/*

1. Arithmetic Operators 
2. Assignment Operators 
3. Comparison (Relational) Operators 
4. Logical Operators
5. Special Operators

*/

/* Arithmetic Operators */

/*

1.    + (Addition)
2.    - (Subtraction)
3.    * (Multiplication)
4.    / (Division)
5.    % (Modulus)
6.    ++ (Increment)
7.    -- (Decrement)
8.    **(Exponentiation)

*/

/* Arithmetic Operators */
{
// var a=5;
// var b=5;
// var c = a%b;
// console.log(c)

}

/*  ASSIGEMENT OPERATOR  */


  /*

= (Simple Assignment )

Ex: C = A + B will assign the value of A + B into C

+= (Add and Assignment)

Ex: C += A is equivalent to C = C + A

−= (Subtract and Assignment)

Ex: C -= A is equivalent to C = C - A

*= (Multiply and Assignment)

Ex: C *= A is equivalent to C = C * A

/= (Divide and Assignment)

Ex: C /= A is equivalent to C = C / A

%= (Modules and Assignment)

Ex: C %= A is equivalent to C = C % A

**= (Exponentiation and assignment)

Ex: C**=A IS equivalent to C=C**A

*/
{
    // var a=3;
    // var b=3;
    // var c = b+=a
    // var c = b-=a;
    // var c =b*=a;
    // var c = a%=b
    // var c = a/=b;
    // var c = a**=b
    // console.log(c)
}

  /* Comparison Operators */

  /* Comparison Operators */

/*

== (Equal)
Checks if the value of two operands are equal or not, if yes, then the condition becomes true.
Ex: (A == B) is not true.

=== (identical equel and same type)
The strict equality (===) operator checks whether its two operands are equal, returning a Boolean result. Unlike the equality operator, the strict equality operator always considers operands of different types to be different.

!= (Not Equal)
Checks if the value of two operands are equal or not, if the values are not equal, then the condition becomes true.
Ex: (A != B) is true.


!==	(not equal value or not equal type)
Checks if the value of two operands are equal or not, if the values are not equal, then the condition becomes true.

> (Greater than)
Checks if the value of the left operand is greater than the value of the right operand, if yes, then the condition becomes true.
Ex: (A > B) is not true.

< (Less than)
Checks if the value of the left operand is less than the value of the right operand, if yes, then the condition becomes true.
Ex: (A < B) is true.

>= (Greater than or Equal to)
Checks if the value of the left operand is greater than or equal to the value of the right operand, if yes, then the condition becomes true.
Ex: (A >= B) is not true.

<= (Less than or Equal to)
Checks if the value of the left operand is less than or equal to the value of the right operand, if yes, then the condition becomes true.
Ex: (A <= B) is true.

*/

{
    // var a = 10;
    // var b = 11;

    // // var c = a ==b;
    // // var c = a ===b;
    // // var c = a !=b;
    // // var c = a !==b;
    // // var c = a > b;
    // // var c = a < b;
    // //  var c = a >= b;
    // //  var c = a <= b;
    // console.log(c)
}

       /* Logical Operators */

       /*

&& (Logical AND)

If both the operands are non-zero, then the condition becomes true.
Ex: (A && B) is true.


|| (Logical OR)
If any of the two operands are non-zero, then the condition becomes true.
Ex: (A || B) is true.


! (Logical NOT)
Reverses the logical state of its operand. If a condition is true, then the Logical NOT operator will make it true.
Ex: ! (A && B) is false.

*/

/*

(a && b) => false
(a || b) => true
!(a && b) => true

*/

//  let a = false
//  let b = false
//  let c = false
//  let d = false

//   let e = !(a && b || c|| d);
//   console.log(e);


// qestion-1

               //  var a=1+2*3       ans=7
              //  console.log(a) 

// 2]
//            var b=1+"2"*3           ans=7         3*2=6+1
//            console.log(b)

 // 3]
//               var c= "1"+"2"*3    ans=16    3*2=6
//              console.log(c)                 str hovathi 1 as it is

// qestion-2

//  1]
                    //var  a=1+2**3/2-1
                  // console.log(a)  ans=4        nathi khbr

// 2]
                 // var  b=9/2*3
              //   console.log(b)    ans=13.5        9/2=4.5*3
                                         

//  3]                                 3*2=6/9
            //  var c = 9/(2*3)                       ans= 1.5
           //  console.log(c)


      
  // qestion-3
  //  1]
             // {
            //  x = 1;
           //  x++;
          //  alert(x)   ans 2
        // }

// 2]

          //  {
         //   x = 1;
        //   alert(++x)   ans 2
       //  }   
// 3]
         //  {
       //    var x = 1;
      //   alert(x++)          ans-2
     //  }

  // qestion-4
  // 1]

            //  var a= 1==01
           //  console.log(a)          ans = true

 // 2]
               //  var b = 1===01
             //   console.log(b)          ans = ture

 // 3]
                 // var c ="1"==01
                // console.log(c)           ans = true

// 4]

          //  var d="1" == "01"    //ans = false
          //  console.log(d)
          

          //      var  e="1" == 0 + 1          //  true
          //     var  f="1" == 0 + "1"          //false
          //     var  g="1" == 0 * 1            //false
          //     var  h="1" == 0 * "1"          //false

          //     console.log(e)
          //    console.log(f)
          //   console.log(g)
          // console.log(h)

 // qestion-5

             //  var a= true && false                 false
            // var  b=  true && false || true         true
           //  var c= true && false || !true          false
          //  var d= !(true && false)                 true
       
            //   console.log(a)
           //   console.log(b)
          //   console.log(c)
         //   console.log(d)

 // qestion-6
         
              // 1]
              //  var x="123";
             //  var y = 123;
             //  z =( x + y );
            //  console.log(z)          ans - 123123

 // qestion-7

              // var mark =90
              // var mark=(mark <35)?"faill":"pass";
              // console.log(mark)

  // qestion-8   html maa che

  //qestion-9
                     

// qestion-10
 // 1]
                 //  var a = "1"
               //  console.log(typeof(a))  ans-string

 // 2]
               //  var b =5
             //  console.log(typeof(b))
            //     ans-Number



 // qestion-11
             // var x="123"
             // var y= 123;     ans 123123
               // alert(x+y)