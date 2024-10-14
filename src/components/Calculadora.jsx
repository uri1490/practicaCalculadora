import React, { useRef, useState } from "react";

export const Calculadora = () => {
  const numeros = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
  const operadores = ["+", "-", "*", "="];
  const [res, setRes] = useState(0);
  const [valor, setValor] = useState("");
  const refInput = useRef("");
  const [op, setOp] = useState("");
  const handleValor = (e) => {
    console.log("e", e);
    e = valor + e;
    setValor(e);
    console.log(e);
  };
  const handleValor2 = (e) => {
    setValor(e);
    console.log(e);
  };
  const handleOperacion = (operacion) => {
    let res1 = 0;
    if (operacion != "=" && operacion != "c") {
      setOp(operacion);
      setRes(valor);
      console.warn("operacion", op);
      setValor("");
    } else {
      console.warn("switch", op);
      switch (op) {
        case "+":
          res1 = Number.parseFloat(res) + Number.parseFloat(valor);
          setValor(res1.toString());
          break;
        case "-":
          res1 = Number.parseFloat(res) - Number.parseFloat(valor);
          setValor(res1.toString());
          break;
        case "*":
          res1 = Number.parseFloat(res) * Number.parseFloat(valor);
          setValor(res1.toString());
          break;
        case "/":
          res1 = Number.parseFloat(res) / Number.parseFloat(valor);
          setValor(res1.toString());
          break;
        case "c":
          setValor("");
          setRes("");
          break;
        default:
          console.warn("operacion no valida", op);
      }
    }
    if (operacion == "c") {
      setValor("");
      setRes(0);
      setOp("");
    }
  };
  return (
    <>
      <div className="w-3/12 h-2/5  grid grid-cols-1 grid-rows-4 gap-1 bg-[#F5F5F5] border border-solid rounded-md p-1">
        <div className="rounded-md">
          <input
            disabled
            type="text"
            placeholder="0"
            value={valor}
            onChange={(e) => handleValor2(e.target.value)}
            className="bg-slate-300 w-full  text-right rounded-sm font-digital h-full text-4xl text-[#40514E]"
          />
        </div>
        <div className="grid grid-cols-4 gap-1 row-span-3">
          <div className="grid grid-cols-3 col-span-3 justify-items-center  gap-2">
            {numeros.map((numero) => (
              <button
                key={numero}
                className="bg-[#30E3CA] w-full h-full rounded-sm text-white text-2xl drop-shadow-lg font-mono"
                onClick={() => handleValor(numero)}
              >
                {numero}
              </button>
            ))}
            <button
              className="bg-[#30E3CA] w-full h-full rounded-sm text-white"
              onClick={() => {
                handleValor(".");
              }}
            >
              .
            </button>
            <button
              className="bg-[#2F89FC] w-full h-full rounded-sm text-white"
              onClick={() => {
                handleOperacion("c");
              }}
            >
              C
            </button>
          </div>
          <div className="bcol-span-1 flex flex-col gap-1 ">
            {operadores.map((operador, index) => (
              <button
                key={index}
                className="bg-[#40514E] text-white w-full h-full rounded-sm text-2xl drop-shadow-lg font-mono"
                onClick={() => {
                  handleOperacion(operador);
                }}
              >
                {operador}
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
