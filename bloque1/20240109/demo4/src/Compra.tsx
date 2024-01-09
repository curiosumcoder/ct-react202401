import React, { useState, useEffect } from "react";

function Compra({cambioCompra}:{cambioCompra: number}) {
  useEffect(() => {
    console.log("After render component ...");   
    console.log(cambioCompra);
    return () => {
      console.log("Clean-up component ...");
    };
  }, []);

  const [dolares, setDolares] = useState(1);

  return (
    <div>
      <h6>Compra</h6>
      <p>
        {dolares}
        <br />
        {/* controlled form elements */}
        <input
          type="number"
          value={dolares}
          onChange={(event) => setDolares(event.target.valueAsNumber)}
          placeholder="Digite los dólares"
        />

        {/* <input type="number" value={dolares}
        onChange={function (ev) {
            console.log('esta cambiando ..')
            console.log(ev)
        } } 
        placeholder="Digite los dólares" /> */}

        <br />
        <strong>Monto en colones: {dolares * cambioCompra}</strong>
      </p>
    </div>
  );
}

export default Compra;
