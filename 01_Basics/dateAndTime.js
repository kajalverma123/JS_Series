let myDate=new Date();
console.log(myDate);
console.log(myDate.toDateString());
console.log(myDate.toLocaleString() );
console.log(typeof myDate);
 
let createDate=new Date(2023,0,23);
console.log(createDate.toLocaleString())
console.log(createDate.toDateString())
let myCreateDate=new Date(2023,1,23);
console.log(myCreateDate.toLocaleString())
console.log(myCreateDate.toDateString())
let secDate=new Date(2025,6,24)
console.log(secDate.toDateString())

let myTimeStamp=Date.now()
console.log(myTimeStamp)