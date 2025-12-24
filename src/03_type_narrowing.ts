function getLove(kind: string | number) {
    if(typeof kind === "string"){
        return `My Love is ${kind}`
    }
    return `Lover Age: ${kind}`
}

console.log(getLove("Kuch Nahi Yaar"));
console.log(getLove(21));


// Truthiness Narrowing
function trueLove(love?: string) {
    if(love){
        return `My True Love is ${love}`;
    }
    return "Just Timepass Wala Love !!!";
}

console.log(trueLove());

// Extoric Narrowing using 'in' operator

function getlove(type: "romantic" | "Unconditional" | "Timepass" | "Arranged") {
    if(type === "romantic"){
        return `My Love type is ${type}`;
    }
    if(type === "Unconditional" || type === "Arranged"){
        return `My Love type is ${type}`;
    }
    return `My Love type is ${type}`;
} 

console.log(getlove("Unconditional"));

// Custom Type Guards

class Romantic {
    love(){
        return `Romantic Love`;
    }
}

class Timepass {
    love(){
        return `Timepass Love`;
    }
}

function love(truth : Romantic | Timepass) {
    if (truth instanceof Romantic){
        return truth.love();
    }
}

console.log(love(new Romantic()));

// guard checking

type ChaiOrder = {
    type: string
    sugar: number
}

function isChaiOrder(obj: any): obj is ChaiOrder{
    return(
        typeof obj === "object" && 
        obj !== null &&
        typeof obj.type === "string" &&
        typeof obj.sugar === "number"
    )
}

function serverOrder(item:ChaiOrder | string){
    if(isChaiOrder(item)){
        return `Chai Order of type ${item.type} with sugar level ${item.sugar}`;
    }
    return `Order is for ${item}`;
}
console.log(serverOrder({type: "Masala", sugar: 2}));

// Advance Type Guards
type MasalaChai = {type: "masala"; spicelevel: number};
type GingerChai = {type: "ginger"; amount: number};
type ElaichiChai = {type: "elaiche"; aroma: number};

type Chai = MasalaChai | GingerChai | ElaichiChai;

function MakeChai(order: Chai){
    switch(order.type){
        case "masala":
            return `Making Masala Chai with spice level ${order.spicelevel}`;
            break;
        case "ginger":
            return `Making Ginger Chai with amount ${order.amount}`;
            break;
        case "elaiche":
            return `Making Elaichi Chai with aroma ${order.aroma}`;
            break;
    }
}

console.log(MakeChai({type: "ginger", amount: 3}));

// One More

function brew(order: MasalaChai | GingerChai){
   if("spicelevel" in order){
    return `Brewing Masala Chai with spice level ${order.spicelevel}`;
   }
}

function isStringArray(arr: unknown): arr is string[] {
    return Array.isArray(arr) && arr.every(item => typeof item === "string");
}