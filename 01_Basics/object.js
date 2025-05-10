//Singleton
const tinderUser=new Object()
console.log(tinderUser)

//Nested object
const regularUser={
    email:"verma@gmail.com",
    "full name":{
        userfullname:{
            firstname:"kajal",
            lastname:"verma"
        }
        }

    }
    console.log(regularUser)
    console.log(regularUser.email)
    console.log(regularUser["full name"])
    console.log(regularUser["full name"].userfullname)

    //Merge Object

    const obj1={
        1:"a",
        2:"b"
    }
    const obj2={
        3:"a",
        4:"d"
    }
   // const obj3={obj1,obj2}
    //console.log(obj3)
   // const obj3= Object.assign(obj1,obj2)
    //console.log(obj3)
    //console.log(obj1)
    //console.log(obj2)

    //const obj3=Object.assign({},obj1,obj2)
    //console.log(obj3)
    //console.log(obj1)
    //console.log(obj2)

    const obj3={...obj1,...obj2}
    console.log(obj3)
    console.log(obj1)
    console.log(obj2)
    
