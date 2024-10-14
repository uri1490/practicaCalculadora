import { useReducer } from "react";
import { Calculadora } from "./components/Calculadora";
function App() {
  return (
    <>
      <div className="h-[100vh] bg-gradient-to-r from-black via-pink-500 to-purple-500 flex justify-center items-center">
        <Calculadora></Calculadora>
      </div>
    </>
  );
}

export default App;
