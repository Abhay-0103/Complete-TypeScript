// Union Types and Literal Types in TypeScript

let subs: number | string = '1M';

let apiRequestStatus: 'pending' | 'success' | 'error' = 'pending';

apiRequestStatus = 'success';

let airlineSeat: 'aisle' | 'middle' | 'window';

airlineSeat = 'window';


// Any Type in TypeScript
// Example for any type which can lead to potential issues
// hence Defing it is recommended to avoid any types

const orders = ['12', '23', '34']

// Here currentOrder can be of any type
let currentOrder : string | undefined; // defined as string to avoid any type issues

for(let order of orders) {
    if(order === '23'){
        currentOrder = order;
        break;
    }
}

console.log(currentOrder);