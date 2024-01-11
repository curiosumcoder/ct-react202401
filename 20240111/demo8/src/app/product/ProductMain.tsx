import { Link, Outlet } from 'react-router-dom'

function ProductMain() {

  const products = [1,2,3,4,5];

  return (
    <>
        <h2>Product - Main</h2>
        <Link to="create">Create</Link>

        {products.map(p=> (<><Link to={`${p}`}>Producto {p}</Link><br/></>))}
        
        <Outlet/>
    </>    
  )
}

export default ProductMain