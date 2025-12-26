// With interface
type ChaiOrder = {
    type: string;
    sugar: number;
    strong: boolean;
}


// Without interface
function makeChai(order: ChaiOrder) {
    console.log(order);
}


function serveChai(order: ChaiOrder) {
    console.log(order);
}


type TeaRecipe = {
    water: number;
    milk: number;
}

// class MasalaChai implements TeaRecipe {
//     water: 100;
//     milk: 50;
// }

interface CupSize {
    size: 'small' | 'medium' | 'large';
}

class chai implements CupSize {
    size: "small" | "medium" | "large" = "large"; 
}


// class cannot implement union type it shpould be interface or type with object shape

// type Response = {ok: true} | {ok: false}
// class myRes implements Response {
//     ok: boolean = true;
// }



// Example
type Person = "Abhay" | "Junaid" | "Unknown"; // called as literal type

function callPerson(p : Person) {
    console.log(p);
}

// intersection type
type BaseChai = {teaLeaves: number}
type Extra = {masala: number}

type MasalaChai = BaseChai & Extra

// cannot defined only one needed both teaLeaves and masala
const cup: MasalaChai = {
    teaLeaves: 2,
    masala: 1
}

type User = {
    username: string;
    bio?: string; // optional property
}

const u1: User = {
    username: "Abhay"
}

const u2: User = {
    username: "Junaid",
    bio: "Chutiyaaaaa...."
}

console.log(u1, u2);

type Config = {
    readonly appName: string;
    version: number;
}

const cfg: Config = {
    appName: "Chal-BSDK",
    version: 1.0
}

// cannot modify readonly property
// cfg.appName = "Chal-Chal"; // Error

console.log(cfg);