import "./App.css";
import { ChaiCard } from "./components/ChaiCard.tsx";
import { Counter } from "./components/Counter.tsx";

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
      </div>
    </>
  );
}

export default App;
