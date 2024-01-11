import { Link, Outlet } from 'react-router-dom'
import './App.css'

function App() {
  return (
    <>
    <h1>Demo 8</h1>
    <ul>
      {/* <li><a href="/product">Product</a></li> */}
      <li><Link to="/product">Product</Link></li>
    </ul>
    <hr/>
    <Outlet/>
    </>
  )
}

export default App
