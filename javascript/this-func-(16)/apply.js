//  function apply() method

// {
//     const newobj = {
//         fristname: 'jasmi',
//         lastname:'mulani'
//     }
//     function grow(wish , message){
//         return`${this.fristname},${wish}.${message}`;
//     }
//     const result = grow.apply(newobj,["good morning","how are you"])
//     console.log(result);
// }

// -------------------------------------
// {
//     const newobj = {
//         firstname:'jasmin',
//         lastname:'mulani',
//     }
//     const grow =(wish ,message) => {
//         return `${this.firstname},${wish}.${message}`;
//     }
//      const result= grow.apply(newobj,["goodmorning","how are you"])
//       console.log(result);    
// }

// ============================================
// function borrowing method

const item= {
    name:'audi',
    discription(){
        return `${this.name} is of ${this.color} color.`   
    }
}
// / const bike ={
    //   name:'BUGATI',
    //   color:'black'
    // }
    
    // let result  = item.discription.apply(bike)
    
    // console.log(result);
    
    // Append Array 
    
    // let color1 = ["Red", "Green", "Blue"];
    // let color2 = ["Yellow", "Black"];
    
    // // appending two arrays color1 and color2
    // color1.push.apply(color1, color2);
    
    // console.log(color1);
    
    
//  ==================================================   
    
    // Array Merge 
    
    // let Array1 = ['dataObj' , 'dataArr' , 'object' , 'string']
    
    // let Array2  = [10 , 20 , 30 , 40 , 50 , 60]
    
    // let NewArry = Array1.concat(Array2)
    
    // console.log(NewArry);
    
    // let NewArry = Array1.push.apply(Array1 , Array2)
    
    // console.log(NewArry);
    
    // console.log(Array1);