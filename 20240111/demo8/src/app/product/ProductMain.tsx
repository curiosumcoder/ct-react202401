import { Link, Outlet } from 'react-router-dom'

function ProductMain() {
  return (
    <>
        <h2>Product - Main</h2>
        <Link to="create">Create</Link>
        <Outlet/>
    </>    
  )
}

export default ProductMain