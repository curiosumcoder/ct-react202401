import React, {useState} from 'react'
import Compra from './Compra'

function TipoCambio() {
    const [colones, setColones] = useState(515);
  return (
    <>
        <h4>Tipo de Cambio</h4>
        <p>Compra: {colones}</p>        
        <input type='number' value={colones} 
        onChange={(event) => setColones(event.target.valueAsNumber)}/>
        <hr/>
        {/* <Compra cambioCompra="515"/> */}
        <Compra cambioCompra={colones}/>
    </>    
  )
}

export default TipoCambio