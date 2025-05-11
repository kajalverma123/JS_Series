//function calculatePrice(...num1)
function calculatePrice(val1,val2,...num1)
{
    //return num1
    return val2
}
//console.log(calculatePrice(100));
console.log(calculatePrice(300,456,100,900));

//Passing object to funtion
const user={
    username:"Verma",
    id:"23"
};
function getUserDetail(anyobject)
{
   // return anyobject.username
   return `Name is ${anyobject.username} and id is ${anyobject.ids}`
}
console.log(getUserDetail(user))


//Passing Array to function

//const newArray=[200,122,345,780,344]
function getArrayValue(getArray)
{
    return getArray[2]
}
//console.log(getArrayValue(newArray))
//console.log(getArrayValue(newArray[3]))
console.log(getArrayValue([433,200,900]))