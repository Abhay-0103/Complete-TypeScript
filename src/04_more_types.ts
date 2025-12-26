let response:any = "42";

// Forcefully convert 'response' to a number and get its length
let numericLength:number = (response as string).length;

type Book = {
    name: string;
}

let bookString = '{"name": "I Too Had a Love Story"}';
// Parse the JSON string and assert its type as 'Book' forefully
let bookObject = JSON.parse(bookString) as Book;

console.log(bookObject.name);

// Common Case
// Assume we have an input element in the HTML with id 'username'
const inputElement = document.getElementById("username") as HTMLInputElement; // Type assertion to HTMLInputElement


// Unkonown and Any Types
let value: any

value = "Chai"
value = [1, 2, 3]
value = 2.5
value.toUpperCae();

let newValue: unknown;

newValue = "Chai"
newValue = [1, 2, 3]
newValue = 2.5
// newvalue.toUpperCae();   // Error: Object is of type 'unknown'. 
if (typeof newValue === "string") {
    newValue.toUpperCase();
}


// try-catch block
try {
    
} catch (error) {
    if(error instanceof Error){ // Type Guard and Type Assertion
        console.log(error.message);
    }
    console.log("Error", error);
}

// safety check
const data: unknown = "Hello, Bhai!"
const strData: string = data as string; // Type Assertion to string

// Never Type
type Role = "admin" | "user" | "superadmin";

function redirectBasedOnRole(role:Role): void {
    if(role === "admin") {
        console.log("Redirecting to admin dashboard");
        return;
    } else if(role === "user") {
        console.log("Redirecting to user homepage");
        return;
    }
    role;
}

function neverReturns(): never {
    while(true){
        // Infinite loop
    }
}