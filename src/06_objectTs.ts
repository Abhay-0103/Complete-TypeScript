const ladkibazz = {
    name: "Hai Koi",
    age: 21,
    isHot: true
}

// {
//     name : string;
//     age : number;
//     isHot : boolean;
// }

let ladkibazz2: {
    name: string;
    age: number;
    isHot: boolean;
} 
ladkibazz2 ={
    name: "Hai Koi",
    age: 21,
    isHot: true
}

type LadkiBazzType = {
    name: string;
    age: number;
    intresetedIn: string[];
}

const ladkibazz3: LadkiBazzType = {
    name: "Hai Koi saath",
    age: 22,
    intresetedIn: ["Music", "Dance", "Singing"]
}

// Duck Typing

type Cup = {size: string};
let smallCup: Cup = {size: "200ml"}

let bigCup = {size: "500ml", material: "Steel"};

smallCup = bigCup; // Duck Typing is here

console.log(smallCup);

type Brew = {brewTime: number}
const coffee = {brewTime: 5, beans: "Arabica"}
const chaiBrew: Brew = coffee; // Duck Typing

console.log(chaiBrew);


// Nested Object Types

type User = {
    username: string;
    password: string;
}

const u: User = {
    username: "Abhay",
    password: "password123"
}

console.log(u);

// Split Type Declaration
// also called partial type declaration
// and Required type declaration

type Item = {name: string, quantity: number}
type Address = {street: string, pin: number}

type Order = {
    id: string;
    items: Item[];
    shippingAddress: Address;
}

type Chai = {
    name: string;
    price: number;
    isHot: boolean
}

const updateChai = (updates: Partial<Chai>) => {
    console.log("Updating Chai wiht", updates);
}

updateChai({price: 30});
updateChai({isHot: false});
updateChai({})

type ChaiOrder = {
    name?: string;
    price?: number
}

const placeOrder = (order: Required<ChaiOrder>) => {
    console.log("Placing order for", order);
}

placeOrder({
    name: "Masala Chai",
    price: 25
})

// pick and omit

type newChai = {
    name: string;
    price: number;
    isHot: boolean;
    ingredients: string[];
}

type BasicChaiInfo = Pick<newChai, "name" | "price">

const chaiInfo : BasicChaiInfo = {
    name: "Lemon Tea",
    price: 30
}

console.log("Chai Info", chaiInfo);

// omit

type ChaiNew = {
    name: string;
    price: number;
    isHot: boolean;
    secretIngredients: string[];
}

type PublicChai = Omit<Chai, "secretIngredients">;

