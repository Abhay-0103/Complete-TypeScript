import "./App.css";
import { ChaiCard } from "./components/ChaiCard.tsx";
import ChaiList from "./components/ChaiList.tsx";
import { Counter } from "./components/Counter.tsx";
import { OrderForm } from "./components/OrderForm.tsx";

import type { Chai } from "./types.ts";

const menu: Chai[] = [
  { id: 1, name: "Masala Chai", price: 20, isHot: true },
  { id: 2, name: "Adrak Chai", price: 25 },
  { id: 3, name: "Elaichi Chai", price: 30, isHot: true },
];

function App() {
  return (
    <>
      <div>
        <h1>Hello Bhai</h1>
        <ChaiCard name="Adrak Chai" price="₹20" />
        <ChaiCard name="Elaichi Chai" price="₹25" isSpecial />
        <div>
          <Counter />
        </div>
        <div>
          <ChaiList items={menu} />
        </div>
        <div>
          <OrderForm
            onSubmit={(order) => {
              console.log("Order received", order.name, order.cups);
            }}
          />
        </div>
      </div>
    </>
  );
}

export default App;
