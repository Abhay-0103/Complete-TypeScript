interface Chai {
    flavor: string;
    price: number;
    milk?: boolean; // Optional property
}

const masala:Chai = {
    flavor: "Masala",
    price: 20
};

interface Shop {
    readonly id: number; // Readonly property
    name: string;
}

const s: Shop = { id: 1, name: "Tea Shop" };
// s.id = 2; // Error: Cannot assign to 'id' because it is a read-only property.

interface DiscountCalulator {
    (price: number): number; // Function type interface
}
const apply50: DiscountCalulator = (p) => p * 0.5;
console.log(apply50(100)); // Output: 50

interface TeaMachine {
    start(): void;
    stop(): void;
}

const machine: TeaMachine = {
    start() {
        console.log("Machine started");
    },
    stop() {
        console.log("Machine stopped");
    }
}


// Index signature

interface ChaiRatings {
    [flavor: string]: number; // Index signature
}

const ratings: ChaiRatings = {
    Masala: 4.5,
    Ginger: 4.0,
    Cardamom: 4.8
};


// Main function to demonstrate the use of interfaces

interface User {
    name: string;
}

interface User { 
    age: number; 
}

const u: User = {
    name: "Abhay",
    age: 22
}

interface A {a: string}
interface B {b: string}

interface C extends A, B {c: string}