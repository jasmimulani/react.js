/* bind method */

const student1 = {
    name:"jack",
    grade:"5",
    introduction:function(){
        console.log(this.name  + "student in grade" +this.grade+" .");
    },
};

const student2 ={
    name:"jimmy",
    grade:"6",
};

 let result = student1.introduction.bind(student1)
 result();