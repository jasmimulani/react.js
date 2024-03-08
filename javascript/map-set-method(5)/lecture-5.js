// map method
/*
new Map()	Creates a new Map
set()	Sets the value for a key in a Map
get()	Gets the value for a key in a Map
delete()	Removes a Map element specified by the key
has()	Returns true if a key exists in a Map
entries()	Returns an iterator with the [key, value] pairs in a Map
Property	Description
size	Returns the number of elements in a Map
*/

// methods
/* You can create a Map by passing an Array to the new Map() constructor */
{
    // const data= new Map([
    //     ["option-1",20],
    //     ["option-2",40],
    //     ["option-3",60],
    //     ["option-4",80]
    // ])
    //   console.log(data);
    //   console.log(data.size);
}
  /* The set() method can also be used to change existing Map values */
{
    // const newmap = new Map();

    // newmap.set("item-1","car");
    // newmap.set("item-2","bus");
    // newmap.set("item-3","truck");
    // newmap.set("item-1",50)

    // console.log(newmap);
}
 /* The get() method gets the value of a key in a Map */

{
//  const newmap = new Map([
//     ["item-1" , "car"],
//     ["item-2" , "bus"],
//     ["item-3" , "truck"]
//  ]);

//      newmap.set("item-1","truck");
//      console.log(newmap);
    //  console.log(newmap.get("item-1"));
}     
 /* The size property returns the number of elements in a Map */

{
    // const data = new Map([
    //     ["option-1" , 20],
    //     ["option-2" , 40],
    //     ["option-3" , 60],
    //     ["option-4" , 80],
    //     ["option-4" , 80]
    // ])

    // const sizes = data.size;
    // console.log(sizes);
}
    /* The delete() method removes a Map element */

{

    // const newmap = new Map([
    //     ["item-1" , "car"],
    //     ["item-2" , "bus"],
    //     ["item-3" , "truck"],
    // ]);
    
    //      console.log(newmap);
    //      console.log(newmap.delete("item-1"));
    //      console.log(newmap);
}
/* The has() method returns true if a key exists in a Map */   
{
    // const data = new Map([
    //     ["option-1" , 20],
    //     ["option-2" , 40],
    //     ["option-3" , 60],
    //     ["option-4" , 80],

    // ])

    // console.log(data.has("option-4"));
}
{
    // const data = new Map([
    //   ["option-1" , 20],
    //   ["option-2" , 40],
    //   ["option-3" , 60],
    //   ["option-4" , 80]
    // ])
    //      data.delete("option-5");
    //      const hasss = data.has("option-5");
    //      console.log(hasss);
    //      console.log(data.size);
}
 /* Note : forEach() after function lecture */
// --------------------------------------------------------------------------
// prectice

// new map
// {
//     const x = new Map([
//        ["option-1",20],
//        ["option-2",40],
//        ["option-3",50],
//        ["option-4",80]
//     ])
//     console.log(x);
//     console.log(x.size);
// }
// {

//     let y = new Map([
//      ["class-1",50],
//      ["class-2",60],
//      ["class-3",70],
//      ["class-4",80],
//      ["class-5",90]
//     ])
//     console.log(y);
//     console.log(y.size);
// }
// {
//     var z = new Map([
//         ["examplel-1",1],
//         ["examplel-2",2],
//         ["examplel-3",3],
//         ["examplel-4",4],
//         ["examplel-5",5]
//     ])
//       console.log(z);
//       console.log(z.size);
// }

// ---------------------------------

// set method

{
    //  const x = new Map();
    
    //   x.set("item-1","car"),
    //   x.set("item-2","bus"),
    //   x.set("item-3","truck"),
    //   x.set("item-4","bike")
    
    //   x.set("item-1","car");
    //   console.log(x);
    //    console.log(x.get("item-1"));
}
{
    // let y = new Map();

    // y.set("option-1","yes")
    // y.set("option-2","no")
    // y.set("option-3","close")
    // y.set("option-4","ok")
    // y.set("option-5","sorry")

    //  y.set("option-1","yes");
    //  console.log(y);
    //  console.log(y.get("option-5"));
}
{
    //  var z = new Map();

    // z.set("dish-1","sendwichh")
    // z.set("dish-2","dosa")
    // z.set("dish-3","frenky")
    // z.set("dish-4","jiniroll")
    // z.set("dish-5","karelanu shak")

    //  z.set("dish-1","sendwichh");
    //  console.log(z);
    //  console.log(z.get("dish-4"));
}
// -----------------------------------
// get
{

    //  const x = new Map([
    //       ["option-1","car"],
    //       ["option-2","bus"],
    //       ["option-3","truck"],
    //       ["option-4","bus"],
    //       ["option-5","bike"]
    //  ]);
    //    x.set("option-1","car");
    //    console.log(x);
    //    console.log(x.get("option-1"));
}
{  
    // let y = new Map([
    //     ["item-1",40],
    //     ["item-2",50],
    //     ["item-3",60],
    //     ["item-4",70],
    //     ["item-5",80]
    // ]);
    //  y.set("item-1","40");
    //  console.log(y);
    //  console.log(y.get("item-1"));
}
{
//     var z = new Map([
//         ["dish-1","dosha"],
//         ["dish-1","sendwich"],
//         ["dish-1","panipuri"],
//         ["dish-1","frenky"]
//     ]);

//       z.set("dish-1","dosa");
//       console.log(z);
//       console.log(z.get("dish-1"));
}
// --------------------------------
  // size
{
    
    // const x = new Map([
    //    ["item-1",40],
    //    ["item-2",50],
    //    ["item-3",60],
    //    ["item-4",70],
    //    ["item-5",80]
    // ]);
    //  const y =x.size;
    //  console.log(y);
}
{
    
    // let y = new Map([
    //     ["item-1",40],
    //     ["item-2",50],
    //     ["item-3",60],
    //     ["item-4",70],
    //     ["item-5",80]
    // ]);
    // const x = y.size
    //   console.log( x);
}
{
    // var z = new Map([
    //             ["dish-1","dosha"],
    //             ["dish-2","sendwich"],
    //             ["dish-3","panipuri"],
    //             ["dish-4","frenky"]
    //         ]);
    //         const y = z.size
    //         console.log(y);
}
// -----------------------------
// delete
{

    // const x = new Map([
    //        ["item-1",40],
    //        ["item-2",50],
    //        ["item-3",60],
    //        ["item-4",70],
    //        ["item-5",80]
    //     ]);
    //      console.log(x);
    //      console.log(x.delete("item-3"));
    //      console.log(x);
}
{
    // let y = new Map([
    //     ["item-1",40],
    //     ["item-2",50],
    //     ["item-3",60],
    //     ["item-4",70],
    //     ["item-5",80]
    // ]);
    //   console.log( y);
    //   console.log(y.delete("item-5"));
    //   console.log(y);
}
{
                //  var z = new Map([
                //     ["dish-1","dosha"],
                //     ["dish-2","sendwich"],
                //     ["dish-3","panipuri"],
                //     ["dish-4","frenky"]
                // ]);
                // console.log(z);
                // console.log(z.delete);
                // console.log(z);
}
// -------------------
// has
{

    // const x = new Map([
    //            ["item-1",40],
    //            ["item-2",50],
    //            ["item-3",60],
    //            ["item-4",70],
    //            ["item-5",80]
    //         ]);
             
    //          console.log(x.has("item-9"));
}
{
    // let y = new Map([
    //     ["item-1",40],
    //     ["item-2",50],
    //     ["item-3",60],
    //     ["item-4",70],
    //     ["item-5",80]
    // ]);
      
    //   console.log(y.has("item-5"));
      
}
{
    //   var z = new Map([
    //                 ["dish-1","dosha"],
    //                 ["dish-2","sendwich"],
    //                 ["dish-3","panipuri"],
    //                 ["dish-4","frenky"]
    //             ]);
                
    //             console.log(z.has("dish-1"));
                
}
