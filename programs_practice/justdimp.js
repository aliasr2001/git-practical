// Just take it as a Practice for JS - Kind of :P


// New Keyword - What it is for ?
// It is used to create a new object from the functional object - functional objects do not create an object if you have not used the new keyword. Let's have a Look :)
/*
const User = function (firstName, courses){
    this.firstName = firstName;
    this.courses = courses;
    this.getCourseCount = function (){
        console.log(`This the Course Count of this user : ${this.courses}`);
    }
}

let User1 = new User("Hitesh", "Full-Stack Dev", 32)
let User2 = new User("Ali", "Rust Engineer", 3)
console.log(User1)
console.log(User2)
*/


// Bind [ Borrow a method ] - A property of which is old but useful to have it :)
/* 
let user = {
    name: "ali",
    type: "alien",
    getInfo: function(){
        console.log(`hey! My name is ${this.name} and I'm a good ${this.type}`);
    }
}

let user1 = {
    name: "bayman",
    type: 'human'
}

user.getInfo()
let newUserInfo = user.getInfo.bind(user1)
newUserInfo()
*/


// Get to know node Elements in JavaScript

// [5 June, 2023] - Today I received the 2000/rs in my SadaPay account from Abdullah to pay his eHunar course enrollment fee. The current battery of my Laptop is 94% and my battery is 81% :)

