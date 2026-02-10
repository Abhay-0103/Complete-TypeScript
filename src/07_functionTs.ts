function makeChai(type: string, cups: number) {
    console.log(`Making ${cups} cups of {type}`);
}

makeChai("Masala", 2);

function getChaiPrice(): number {
    return 25;
}

function makeOrder(order: string) {
    if (!order) return null;
}

function logBhai(): void {
    console.log("Bhai is ready");
}

// function orderLadki(type?: string) {

// }

function orderLadki(type: string = "Mast Item") {
    console.log(`Ordering a ladki of type: ${type}`);
}

function createLadki(order: {
    name: string;
    age: number;
    isHot: boolean;
}) {
    console.log("Creating ladki with order:", order);
}


// In TypeScript same javaScript Function are used With defined for typeSaftiy 
