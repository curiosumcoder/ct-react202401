'use client'
import React, { useState } from 'react'

function Counter() {
    const [numero, setNumero] = useState(0)
  return (
    <>
        <p>Número: {numero}</p>
        <button onClick={() => setNumero(numero+1)}>Siguiente</button>
    </>
  )
}

export default Counter