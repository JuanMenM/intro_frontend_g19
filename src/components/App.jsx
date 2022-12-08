import { useState, useEffect } from "react";

function App() {
  console.log('montaje');
  const [number, setNumber] = useState(1_000);
  const [isView, setIsView] = useState(false);


  // side effects
  // useEffect

  const sumar = () => {
    // setNumber(9_000)
    // console.log(2 + 2);
  }

  sumar()

  /* ciclo de vida */
  /* 
  
  montaje -> ejecuta jsx, luego ejecuta el código

  actualización -> vuelve a montar el componente

  desmontaje -> 1. desmonte , 2. ejecute un código
  
  */

  return (
    <div className="app text-white">
      <h1 className="text-danger">Consumo de APIS</h1>
      <h2>{number}</h2>
      <button
        className="d-block btn btn-primary"
        onClick={() => setNumber(number + 1)}
      >
        Sumar
      </button>
      <button
        className="d-block btn btn-info"
        onClick={() => setIsView(!isView)}
      >
        Visible
      </button>
      {isView && <p>Visible</p>}
    </div>
  );
}

export default App;
