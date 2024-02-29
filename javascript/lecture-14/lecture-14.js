/* Javascript Object */

// const dataobject = {}
// console.log(dataobject);

// const dataobject1 = {
//   key1:"javascript",
//   key2:"reactjs"
// }
// console.log(dataobject1);

// console.log(dataobject1.key1);

// console.log(dataobject1.key2);

// console.log(dataobject1["key1"]);

// console.log(dataobject1["key2"]);


// const dataobject3 = {
//     name:"jasmi",
//     gender:"female",
//     address:"jakatnaka",
//     marks:{
//         python:99,
//         opreatingsystem:98
//     }
// }

// console.log(dataobject3.marks.python);

// console.log(dataobject3["marks"]);

// console.log(dataobject3["marks"]["opreatingsystem"]);

// const dataobject4 = {
//     array:[1,2,3,4,5,6,[111,222]],
//     array2:[11,12,13,14,15,16],
// }

// console.log(dataobject4.array);
// console.log(dataobject4.array[6][0]);


// const array1 = [
//     {
//     id:1,
//     item:"apple",
//     catagories:"fruits"
// },

// {
//     id:2,
//     item:"banana",
//     catagories:"fruits"
//   },

//   {
//     id:3,
//     item:"graps",
//     catagories:"fruits"
//   },

//   {
//     id:4,
//     item:"mango",
//     catagories:"fruits"
//   },

//   {
//     id:5,
//     item:"watermelon",
//     catagories:"fruits"
//   }
// ]

//  console.log(array1[0].id);


// let arraay= [5,10,15,20,25,30,35,40,45,50,60,70,80,90,100];
// let array1 = arraay.filter(num => num <= 50)
// console.log(array1);
// let array2 = arraay.filter(num => num >= 50)
// console.log(array2);


// {

// const list = [{
//         fruits:
//         {
//             fruits1:{

//                 name1:"apple",
//             },
//             fruits2:{

//                 name2:"banana",
//             },
//             fruits3:{

//                 name3:"cheryy",
//             },
//             fruits4:{

//                 name4:"strobery",
//             },
//             fruits5:{

//                 name5:"orange",
//             }
//         },
//         fastfood:
//         {
//             fastfood1:
//             {
//                item1:"panipuri",
//             },
//             fastfood2:
//             {
//                item2:"manchausup",
//             },
//             fastfood3:
//             {
//                item3:"pawbhaji",
//             },
//             fastfood4:
//             {
//                item4:"sendwich",
//             },
//             fastfood5:
//             {
//                item5:"dosa",
//             }
//         },
//         color:
//         {
//             color1:
//             {
//                color1:"red",
//             },
//             color2:
//             {
//                color2:"blue",
//             },
//             color3:
//             {
//                color3:"yellow",
//             },
//             color4:
//             {
//                color:"green",
//             },
//             color5:
//             {
//                color5:"black",
//             }
//         },
//         subtv:
//         {
//             subtv1:
//             {
//                person1:"jethalal",
//             },
//             subtv2:
//             {
//                 person2:"dayabhabhi",
//             },
//             subtv3:
//             {
//                 person3:"babitaji",
//             },
//             subtv4:
//             {
//                 person4:"champkchacha",
//             },
//             subtv5:
//             {
//                 person5:"dr.hathi",
//             }
//         },
//         cartoon:
//         {
//             cartoon1:
//             {
//                c1:"chotabheem",
//             },
//             cartoon2:
//             {
//                c2:"raju",
//             },
//             cartoon3:
//             {
//                c3:"indumati",
//             },
//             cartoon4:
//             {
//                c4:"tuntunmosi",
//             },
//             cartoon5:
//             {
//                c5:"kaliya",
//             }
//         },
//     }
// ]

//  const input = prompt("enter fruits or items:");

//  if(input == " fruits"){
//     console.log("fruits",list[0]["fruits"]);
//  }
//  else if
//     (input == "fastfood"){
//         console.log("fastfood",list[0]["fastfood"]);
//  }
//  else if
//     (input == "color"){
//         console.log("color",list[0]["color"]);
//  }
//  else if
//     (input == "subtv"){
//         console.log("subtv",list[0]["subtv"]);
//  }
//  else if
//     (input == "cartoon"){
//         console.log("cartoon",list[0]["cartoon"]);
//  }
//     else{
//         console.log("please! page is not found");
//     }
// }    
    


//object   




// let list = [
//                 { name1:"apple",category:"fruits"},
//                 { name2:"banana", category:"fruits"},
//                 { name3:"cheryy", category:"fruits"},
//                 { name4:"strobery", category:"fruits"},
//                 { name5:"orange",category:"fruits"},
            
//                 {item1:"panipuri",category:"food"},
//                 {item2:"manchausup" , category:"food"},
//                 {item3:"pawbhaji",category:"food"},
//                 {item4:"sendwich",category:"food"},
//                 { item5:"dosa",category:"food" },

//                 { color1:"red",category:"color"  },                
//                 {color2:"blue", category:"color"   },
//                 { color3:"yellow",category:"color"},
//                 { color:"green", category:"color" },
//                 { color5:"black", category:"color"},

//                 {person1:"jethalal",category:"subtv"},
//                 {person2:"dayabhabhi",category:"subtv"},
//                 {person3:"babitaji",category:"subtv"},
//                 { person4:"champkchacha", category:"subtv"},
//                 { person5:"dr.hathi",category:"subtv" },

//                 {c1:"chotabheem", category:"crtoon" },            
//                 {  c2:"raju", category:"crtoon" },
//                 {c3:"indumati", category:"crtoon" },
//                 {c4:"tuntunmosi", category:"crtoon" },               
//                {c5:"kaliya",category:"crtoon"}
//             ];
//             let output = prompt("Enter value: ");
//             let output1=  list.filter(list => list.category == output);
        
//             console.log(output1);




// 1. javascript object method

// object.assign()

// syntax
{
    // object.assign(target,.....sources)
}

{
    // const obj1 = {num1:"1", mun2:"2"}
    // const obj2 = {num3:"3", mun4:"4"}
    // const obj3= {num5:"5", mun6:"6"}

    // const obj4 = Object.assign(obj1 , obj3)
    // console.log(obj1);
    // console.log(obj3);

}

// aasign() return value

// Javascript Object.assign() to Clone Objects

{
    // let obj1 = {num1:"1",num:"2"}
    // let obj2={num3:"3"};
    
    // let object3 = Object.assign(obj1,obj2)
    
    // let allobj = obj2  = obj1
    
    // console.log(obj1);
    // console.log(obj2);
    // console.log(allobj);
}

//  merege method()

{
    //  const obj1 = {num1:"1", mun2:"2"}
    //  const obj2 = {num3:"3", mun4:"4"}
    //  const obj3 = {num5:"5", mun6:"6"}

    //  const object4 = Object.assign({},obj1,obj2,obj3)

    //  const arraay = object4.num1

    //  console.log(arraay);
    //  console.log(object4);
}

// In the above example, we have used assign() to merge the objects o1, o2, and o3 into a new object o4.

{
    // const o4 = Object.assign({}, o1, o2, o3);
  }
  
  // Using the empty object {} as a target object ensures that the properties of the other objects are copied to a new object without modifying any of the source objects.
  
  // As can be seen from the output, properties of later objects overwrite that of earlier ones. For example,
  
  // the b key from o1 is overwritten by its counterpart in o2.
  // the c keys from o1 and o2 are overwritten by their counterpart in o3.
  
  //If the source value is a reference to an object, it only copies the reference value.
  
  //  2. Javascript Object.create()

  {
    // let student={
    //   name:"jasmi",
    //   age:18,
    //   marks :9.97,
    //   display(){
    //     console.log("name" , this.name);
    //   }
    // };

    //   //create new object

    //   let std1= Object.create(student);

    //   let std2=Object.assign(std1, student)


    //   std1.name="khanak";

    //   console.log(std2);
    //   std1.display();
    //   console.log(std1);
    //   console.log(student);

  }

// 3. javascript object.entries()
{
    // const obj ={
    //     name:"kartik",
    //     age:18,
    //     location:"himalaya"
    // };
    // let obj1 = Object.entries(obj);

    // console.log(obj1[2]);

}

// 4. object is()
{
    // let obj1 = {num1:"1",num2:"2"}
    // let obj2 = {num1:"1",num2:"2"}

    // let obj3 = Object.is(obj1,obj1)

    // console.log(obj3);
}

// object with same value
{
    //  console.log(Object.is("Javascript","Javascript"));


    //  console.log(Object.is("Javascript","javascript"));

    //  console.log(Object.is("null","null"));

}

//  is with()

// let obj1={a:1};

// let obj2={a:1};

// console.log(Object.is(obj1,obj2));
// console.log(Object.is(obj1,obj1));


// is with special case

// console.log(object.is([],[]));
// console.log(object.is({},{}));
// console.log(object.is(0,-0));
// console.log(object.is(-0,-0));
// console.log(object.is(nan,0/0));




//5. object.hasown property()

{
    //  const obj ={};
    //  console.log(obj);
    //  obj.id=42;
    //  console.log(obj.hasOwnProperty("id"));
    //  console.log(obj);

}


{

    // const obj={id:42,toString:10};
    // console.log(obj.hasOwnProperty("id"));
    // console.log(obj.hasOwnProperty("tosrting"));
}


// 6. object.freeze()
{
    // const obj={num:"1",num2:"2"}

    // obj.num="10"
    // obj.num2="20"
    // Object.freeze(obj)
    // console.log(obj);
}


// 7. getOwnPropertynames()
{
    // const obj = {
    //     name:'jasmi',
    //     age:18,
    //     address:'surat',
    // };

    //   const propertynames=Object.getOwnPropertyNames(obj);
    // console.log(propertynames);
}


//8 object.setprototypeof()
{
    // const obj ={};
    // const parent={foo:'bar'};

    // Object.setPrototypeOf(obj,parent);
    
    // console.log(obj.foo);
    // console.log(obj);
}

// 9. object.tostring()
{
    // let num = {10:"obj"};
    // console.log(typeof num);
    // console.log(typeof num.toString());
}

{
    // // keys are arranged randomly 
    // const obj={100:"a",22:"b",71:"c"} 

    // console.log(Object.entries(obj));
}

// javascript object.values() with string
{

    // const string="code";
    // console.log(Object.values(string));
}


//10. object.value of()
{

    // let num=new Number(12);

    // console.log(num);
    // console.log(num.valueOf);
}

//11. object values()
{
    // const obj = { 65:"a",100:"b",20:"c"};
    // console.log(Object.values(obj));
}

 //  asyncronous method

//  setTimeout method

// settimeout( function,delay,parameter1,parameter2..........)

/* set timeout(
    function(){

    },delaytime
)
 */

// function print(){
//     console.log(
//         "hello javascript"
//     );
// }
//  setTimeout(print , 5000);

// --------------------------------------------

// let print = () =>
// {
//     console.log("settimeout method");
// }

// setTimeout(print , 5000)

// ----------------------------------------------------

// setTimeout(
//     function greet(){
//         console.log("hello java");
//     }, 5000
// )
// setTimeout(print , 5000)
// -----------------------

// setTimeout(
//     () => console.log("hello java"), 5000
// )
// -----------------------------------------------------

// function greet(name , age){
//     console.log(`your name is ${name} and age ${age}`);
// }
// setTimeout(greet , 1000 , "jasmi" , 18)


// ----------------------------------------------------------


/*  setinterval */

// setinterval(function , delay , parameter1 , perameter2.......)

// setInterval(
//     function  greet() {
//         console.log("1"); 
//     }, 2000
// )

// ------------------------------------

// setInterval(

//     () => console.log("hello"), 3000
// )

// ----------------------------------------

// function greet(name , age){
//         console.log(`your name is ${name} and age ${age}`);
//     }

//     setInterval(greet , 1000 , "jasmi", 18)

// --------------------------------------
/* set interval id */

//  function greet(name , age){
//             console.log(`your name is ${name} and age ${age}`);
//         }
//    let id = setInterval(greet , 1000 , "jasmi" , 18)
//    console.log("this is id", id);
//    clearInterval(id)

// --------------------------------------------------------------------------------------------------
/*task */

// setInterval(time, 3000);

// function time() {
//   const date = new Date();
//   console.log( date.toLocaleTimeString());
// }

// or========================================================


// const date = setInterval(Time, 3000);

// function Time() {
//   const date = new Date();
//   console.log(date.toLocaleTimeString());
// }

// function myStopFunction() {
//   clearInterval(date);
// }








