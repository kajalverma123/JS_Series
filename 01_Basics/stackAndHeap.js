//Stack(Primitive)
let myName="KajalVerma"
let secName=myName
secName="SoumyaVerma"
console.log(myName);
console.log(secName);

//Heap(Non-Primitive)
let userOne={
    email:"kajalverma@gmail.com",
    upi:"user@ybl"
}
let userTwo=userOne
userTwo.email="soumya@gmail.com"
console.log(userOne.email);
console.log(userTwo.email);