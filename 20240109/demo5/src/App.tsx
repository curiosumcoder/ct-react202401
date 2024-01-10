import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ProductSearch from './components/product/ProductSearch'
import ProductList from './components/product/ProductList'
import IProduct from './model/IProduct'

function App() {
  const [lista, setLista] = useState(Array<IProduct>());

  return (
    <>
    <h1>Product App</h1>
    <ProductSearch onResults={(r: Array<IProduct>) => setLista(r)}/>
    <hr/>
    <ProductList products={lista}/>
    </>
  )
}

export default App
