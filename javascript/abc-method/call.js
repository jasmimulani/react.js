function product(name, price){
    this.name = name;
    this.price= price;
}
function food (name , price){
    product.call(this,name,price);
    this.category='food';
}
console.log(new product('cheese',5).name);
