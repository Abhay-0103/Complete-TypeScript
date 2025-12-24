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