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

// {
//     let list=[
//         { color: "1", catagories:"red"},
//         { color: "1", catagories:"red"},
//         { color: "1", catagories:"red"},
//         { color: "1", catagories:"red"},
//         { color: "1", catagories:"red"},
//         { color: "1", catagories:"red"},

//         { item: "2",  catagories:"dosa"},
//         { item: "2",  catagories:"panipuri"}, 
//         { item: "2",  catagories:"khaman"},
//         { item: "2",  catagories:"sendwich"},
//         { item: "2",  catagories:"paff"},
            
//     ]
//     let output = promt ("enter item:")
//     let output1
// }



let list = [
                { name1:"apple",category:"fruits"},
                { name2:"banana", category:"fruits"},
                { name3:"cheryy", category:"fruits"},
                { name4:"strobery", category:"fruits"},
                { name5:"orange",category:"fruits"},
            
                {item1:"panipuri",category:"food"},
                {item2:"manchausup" , category:"food"},
                {item3:"pawbhaji",category:"food"},
                {item4:"sendwich",category:"food"},
                { item5:"dosa",category:"food" },

                { color1:"red",category:"color"  },                
                {color2:"blue", category:"color"   },
                { color3:"yellow",category:"color"},
                { color:"green", category:"color" },
                { color5:"black", category:"color"},

                {person1:"jethalal",category:"subtv"},
                {person2:"dayabhabhi",category:"subtv"},
                {person3:"babitaji",category:"subtv"},
                { person4:"champkchacha", category:"subtv"},
                { person5:"dr.hathi",category:"subtv" },

                {c1:"chotabheem", category:"crtoon" },            
                {  c2:"raju", category:"crtoon" },
                {c3:"indumati", category:"crtoon" },
                {c4:"tuntunmosi", category:"crtoon" },               
               {c5:"kaliya",category:"crtoon"}
            ];
            let output = prompt("Enter value: ");
            let output1=  list.filter(list => list.category == output);
        
            console.log(output1);
                   
             
   
