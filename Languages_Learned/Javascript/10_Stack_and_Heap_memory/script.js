/*

1. Stack Memory (Primitive Data Types)
The stack is a region of memory that stores primitive data types (such as numbers, strings, and booleans) and function calls. It operates on a last-in, first-out (LIFO) basis, meaning that the most recently added item is the first to be removed.
    Fast Access: Stack memory is very fast because it's a simple structure.
    Automatic Memory Management: Memory is automatically freed once the function or variable goes out of scope.
    Limited Size: Stack memory is typically smaller compared to heap memory.
    Primitive Types: Only primitive values like numbers, booleans, and strings are stored directly in the stack.

        let n1 = 10;
        let n2 = n1;
        n2 = 20;
        console.log(n1);

*/
/*
2. Heap Memory (Reference Data Types)
    The heap is used for storing complex data structures like objects, arrays, and functions. It is a much larger memory area than the stack, and it allows dynamic memory allocation, meaning that memory is allocated as needed during runtime.

        Dynamic Memory Allocation: The memory is allocated dynamically as required.
        Slower Access: Accessing memory in the heap is slower than the stack due to the complex structure.
        Manual Memory Management: In JavaScript, the garbage collector handles deallocating memory, but the process can be less predictable than stack memory.
        Objects and Arrays: All objects, arrays, and functions are stored in the heap, and the references to them are stored in the stack.

        let obj1 = { name: "Ajay" };
        let obj2 = obj1;
        obj2.name = "Vijay";
        console.log(obj1.name);

*/

// Stack(primitive), Heap(Non-priemitive)
let myYoutubename = "hiteshchoudharydotcom"
let anotherName = myYoutubename
anotherName = "chai aur code"

console.log(myYoutubename);   // in premitive datatype you get a copy of data , hence original data doesn't change.
console.log(anotherName);

// Non-premitive type
let userOne = {
    name:"chandanray",
    upi:"user@ybl",
}

let userTwo = userOne
userTwo.email = "hiteshchoudhary@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);     // in heap memory original data is changed so we got the same data in both place.




