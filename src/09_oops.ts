class Chai {
    flavour: string;
    price: number

    // constructor(flavour: string, price: number) {
    //     this.flavour = flavour;
    //     this.price = price;

    constructor(flavour: string) {
        this.flavour = flavour;
        console.log(this);
    }
}

const masalaChai = new Chai("Ginger");
masalaChai.flavour = "Masala";


// ---------------------------------------------------------------------------------------------------------

class Chai {
    public flavor: string = "Masala";

    private secretIngredient = "Cardamom";

    reveal(){
        return this.secretIngredient; //ok
    }
}

class Shop {
    protected ShopName = "Luffy Chai Wala";
}

class Branch extends Shop {
    getName(){
        return this.ShopName; //ok
    }
}

new Branch().getName(); //ok


// Private why its important ?
 class walet {
    #balance = 100;

    getBalance(){
        return this.#balance; //Always it should use the same name
    }
 }

 const w = new walet();
 console.log(w.getBalance());


// readonly
class Cup {
    readonly capacity: number = 250

    constructor(capacity: number) {
        this.capacity = capacity; //ok
    }
}

// control gets add setters
class ModernChai {
    private _sugar = 2;

    get sugar() {
        return this._sugar;
    }

    set sugar(value: number) {
        if (value > 5) throw new Error("Too much sugar");
        this._sugar = value;
    }
}


const c = new ModernChai();
console.log(c.sugar);
c.sugar = 6;


// Static 

class EkChai {
    static shopName = "Luffy Chai Wala";

    constructor(public flavour: string) {}
}

console.log(EkChai.shopName);

// Abstract class

abstract class Drink {
    abstract make(): void;
}

class MyChai extends Drink {
    make() {
        console.log("Making Chai");
    }
}

// Composition

class Heater {
    heat(){}
}

class ChaiMaker{
    constructor(private heaater: Heater){}

    make() {
        this.heaater.heat();
    }
}