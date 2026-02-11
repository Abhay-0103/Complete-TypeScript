function wrapInArray<T>(item: T): T[] {
    return [item];
}

wrapInArray("Hello"); // Type: string[]
wrapInArray(22); // Type: number[]
wrapInArray({ name: "Abhay", age: 22 }); // Type: { name: string; age: number }[]

function pair<A, B>(a: A, b: B): [A, B] {
    return [a, b];
}

pair("Hello", 22); // Type: [string, number]
pair({ name: "Abhay" }, [1, 2, 3]); // Type: [{ name: string }, number[]

interface Box<T> {
    content: T;
}

const numberBox: Box<number> = { content: 42 };
const stringBox: Box<string> = { content: "Hello" };


interface ApiPromise<T>{
    status: number;
    data: T;
}

const res: ApiPromise<{flavor: string}> = {
    status: 200,
    data: {
        flavor: "Masala"
    }
}