/* Javascript Array */  

// let newaary = [1,false,"string"]
// console.log(newaary);
// console.log(newaary.length);

// let newarry2 = ["apple", "banana", "watermelon", , "lichi"]   // array maa koy jagiya khali hoy pn teni index value hoy tene array no void element
// console.log(newarry2);
// console.log(newarry2[4]);
// console.log(Object.keys(newarry2));


// newarry2[0] = "graps"
// console.log(newarry2);

// let newstring = newarry2.toString();
// console.log(newstring);
// console.log(typeof(newstring));


// Array length properties
// Accessing the First Array Element
// Accessing the Last Array Element
// Adding Array Elements
// Converting Arrays to Strings

//  let arry = ["jasmi","shrushti","ashiti","vishwa","urmilaa"];
//  console.log(arry);
//  console.log(arry[0]);
// console.log(arry[4]);
// arry.push("khushi");
// console.log(arry);
// arry.pop()
// arry.pop()
// console.log(arry);

// arry[0] = "janvi"
// console.log(arry);

//join() method

{
    // let arry = ["jasmi","shrushti","ashiti","vishwa","urmilaa"];
    // let arry2 = arry.join("*") 
    // console.log(arry2);
    // console.log(typeof(arry2));
}

// popping method

{
    // const option = ["option-1","option-2", "option-3","option-4", "option-5"]
    // document.getElementById("demo").innerHTML = option;

    // document.getElementById("demo-2").innerHTML= option.pop()
    // console.log(option);
    // console.log(option.length);
}

// pop method
{
    // const option = ["option-1", "option-2", "option-3", "option-4","option-5"];
    // document.getElementById("demo").innerHTML = option;

    // document.getElementById("demo").innerHTML=option.pop();
    
    // document.getElementById("demo-2").innerHTML=option.pop();

    // document.getElementById("demo-3").innerHTML=option.pop();

    // console.log(option);

}

// pushing method
{
    // const option = ["option-1", "option-2" , "option-3","option-4"];

    // document.getElementById("demo").innerHTML = option;

    // option.push("option-5")

    // document.getElementById("demo").innerHTML=option;

    // console.log(option);
}

{
    // const option = ["option-1", "option-2", "option-3","option-4"];

    // document.getElementById("demo").innerHTML= option.push("hello");
    // console.log(option);

    // document.getElementById("demo-2").innerHTML = option.length;

}

// shifting element   

// let arry = ["option-1" , "t.v", "false", 3 ,"skill","qode"];
// let arry2 = arry.shift();
// let arry3 = arry.shift();
// console.log(arry2);
// console.log(arry3);
// console.log(arry);


// shifted out method

// const option = ["option-1", "option-2", "option-3","option-4"];
// console.log(option);
// document.getElementById("demo").innerHTML = option.shift();
// document.getElementById("demo-2").innerHTML = option.shift();
// console.log(option);

// unshift method
// const option = ["option-1", "option-2", "option-3","option-4"];
// option.unshift("option-0");
// console.log(option);


//unshift method
// const option = ["option-1", "option-2", "option-3","option-4"];
// document.getElementById("demo").innerHTML = option.unshift("option-0");
// document.getElementById("demo-2").innerHTML = option
// console.log(option);

// changing method
// const option = ["option-1", "option-2", "option-3","option-4"];
// console.log(option);
// option[15]="option-15";
// console.log(option);

// add method

// const option = ["option-1", "option-2", "option-3","option-4"];
// document.getElementById("demo").innerHTML=option;
// option[option.length] = "option-5";
// document.getElementById("demo-2").innerHTML=option;


// delete method

// let arry= ["option-1", "option-2", "option-3","option-4","option-5","option-6"];
// console.log(arry);
// console.log(arry.length);
// delete arry[4]
// console.log(arry);
// console.log(arry.length);

// arry.length=20;
// console.log(arry);

// arry[16] = "skill qode"
// console.log(arry);


// merging method

    // let arry1 = ["javascript" , "c" , "c++" , "python" , "html" , "css"];
    // let arry2 = ["kotlin" , "dart" , "nodejs"  , "php" , "wordpress"];
    // let arry3 = ["boostrap" , "tailwind" , "reactjs" , "nextjs"];

    // let arry4 = arry1.concat(arry2,arry3)
    // console.log(arry4);


    // splicing method

    // splice(start)
    // splice(start, deleteCount)
// splice(start, deleteCount, item1)
// splice(start, deleteCount, item1, item2)
// splice(start, deleteCount, item1, item2, /* …, */ itemN)

{
    // let arry1 =["javascript","c","c+","python","html","css"];
    // console.log(arry1);
    // let arry2 = arry1.splice(3,2)
    // console.log(arry2);
    // console.log(arry1);
}


// slice method
// slice()
// slice(start)
// slice(start, end)
 

{
    // let arry1 =[45,89,21,1,57,23]
    // console.log(arry1);
    // let arry2=arry1.slice(1,5)
    // console.log(arry2);
    // console.log(arry1);

}

 /*  Array.isArray */
    //  let book = ["math"  , "chemistry"  , "physics" , "bio"];
    //   let books = "string";
    //   console.log(Array.isArray(books));

    //   let jasmi = ["kartik", "het","vansh"];
    //   let jasmin =["string"];
    //   console.log(Array.isArray(jasmin));


    /*  javascript Sorting Array */
 
 {
    //  let book = ["math"  , "chemistry"  , "physics" , "bio" , "amazon"];
    //  let books = book.sort();
    //  console.log(books);

    //  let jasmi=["jasmi" ,"kiran","vansh", "het","ha","zibra","jac"];
    //  let jasmin = jasmi.sort();
    //  console.log(jasmin);
 }

  /*  Reversing array */
 
  {
//      let book = ["math"  , "chemistry"  , "physics" , "bio"];
//      console.log(book);
//      let bookss = book.reverse();
//      console.log(bookss);
//      let books =book.sort();
//      console.log(books);
 }

 //number sort

//  let arry1=[9,3,7,10,90,70]
//  console.log(arry1);
//  let numbersorted = arry1.sort((a , b) => a - b)
//  console.log(numbersorted);



// let jasmi=["jasmi" ,"kiran","vansh", "het","ha","zibra","jac"];
// console.log(jasmi);
// let jasmin = jasmi.reverse();
// console.log(jasmin);
// let jasminn = jasmi.sort();
// console.log(jasminn);

// javascript array map()
{
    // const number1 = [6,8,10,5,2,3];
    // console.log(number1);
    // const number2=number1.map(myfunction);

    // const number3 = number2.sort((a,b)=> a-b)

    // console.log(number2);

    // function  myfunction(value) {
    //     return value*2;
    // }
}

 /*  javascript Array flatMap() */

//  let flatMap=[1,2,3,4]
//  let flatMap1 = flatMap.flatMap((num) => num ===3? [1,1]:2)
//  console.log(flatMap1);

 /* Javascript Array flat() */
 {
    // let flatarray = [10,20,[22,33,[44,55,[66,77]]]]
    // let flatMap2 = flatarray.flat(1)
    // console.log(flatMap2);
 }

 /* javascript array filter() */
 {
    // let filterarray =["hello","kem-cho","how-are-you","aavjo","khana-khaa-ke-jana"]
    // let filterarray2 =filterarray.filter((word) => word.length < 9)
    // console.log(filterarray2);

    // let filterarray3 = filterarray2.sort()
    // console.log(filterarray3);
 }

 /* javascript array fill  method*/


 {
    // let filtor=[7,5,2,3,6]
    // console.log(filtor);
    // let filtor2=filtor.fill("hello",1)
    // console.log(filtor2);
 }

 /* javascript array copywithin() method */
 
// copyWithin(target, start)
// copyWithin(target, start, end)

// const x=["a","b","c","d","e","f"];
// console.log(x);
// const newcopy = x.copyWithin(3,5);
// console.log(newcopy);
//a,b,c,f,e,f

//target point 3 che atle a,b,c as it is
// start 5 thi thay che atle a,b,c,d,e,f
                           //0,1,2,3,4,5
                           //a,b,c stat 5 par f che atle 
                           //a,b,c,f pachi abcdef maa
                           //a=a
                           //b=b
                           //c=c
                           //d=f   e and f baki rey atle 2repit thy
                           //e=e
                           //f=f
                           //=a,b,c,f,e,f

// let j=[1,2,3,4,5,6,7]
// console.log(j);               //   2,4,5,6,7,7
// let k= j.copyWithin(2,3)
// console.log(k);


// let j=[1,2,3,4,5,6,7]
// console.log(j);               
// let k= j.copyWithin(1,2,3)
// console.log(k);

// 1,3,3,4,5,6,7

// target point 1 che atle 0 index par 1 che te as it is  
//starting point 2 che 2 ni  index par 3 che
//ending point 3 che 1,2,3 maa 3 che last che atle 1,2,3
// ane last 5,6,7 3 repit that atle 1,3,3,5,6,7


/* java scritp valueof() method */


// let array =[1,2,3,4,5,4,2,3,9]
// console.log(array.valueOf());

 /*  JavaScript Multidimensional Array */

//  const data=[[1,2,3],[1,3,4],[4,5,6]];
//  let data1=data[1][1];
//  console.log(data1);

 /* Add an Element to a Multidimensional Array */

 {
    // adding element  outer

    // let stud=[['jack',24],['sara',25]];
    // stud.push(['jasmi',45])
    // let data = stud[2][0]
    // console.log(stud);
    // console.log(data);
 }

 // adding element inner
//  let stud=[['john',1],['sara',2]];
//  stud[1][2]='hello';
//  console.log(stud);

//push method in aaray

// let stud=[['jack',3],['sara',7]]
// stud.splice(0,3,['jasmi',25]);
// console.log(stud);

// remove outer

// let  stud=[['john',1],['sara',2]];
// stud.pop()
// console.log(stud);

// remove inner

// let  stud=[['john',1],['sara',2]];
// stud[1].pop()
// console.log(stud);

//splice 
// let  stud=[['john',1],['sara',2]];
// stud.splice(0,1)
// console.log(stud);