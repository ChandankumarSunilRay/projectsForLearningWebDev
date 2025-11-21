// -------------------singleton 

// creating object using constructor method (singleton created in this)
// Object.create

// object literals
const jsUser = {    
    "name":"chandan",
    "age":18,
    "location":"jaipur",
    "email":"h@gmail.com",
    "isLoggedIn":false,
    "lastLoginDays":["monday","saturday"],



}

// access object : 
console.log(jsUser.lastLoginDays);
console.log(jsUser["email"]);

// edit something : 
jsUser.email = "chandan@gmail.com"
console.log(jsUser["email"])

// can freez the object if wanted
// Object.freeze(jsUser)       //commented for below operation (can on this)

// trying to modify the object
Object.email = "tryingtoeditsomething@gmail.com"
console.log(jsUser["email"]);    // here no edit valuse is seen


// using function on object
jsUser.greeeting = function(){
    console.log(`Hellow greeting ${this.name} `);

    
}
console.log(`Hellow js user ${jsUser.greeeting()}`);