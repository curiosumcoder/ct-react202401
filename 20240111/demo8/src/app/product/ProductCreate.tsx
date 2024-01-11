import { SyntheticEvent, useState } from "react";
import useInput, { IInput } from "../../hooks/useInput";
import ProductService from "../../services/ProductService";
import IProduct from "../../models/IProduct";
import { useNavigate } from "react-router-dom";

function ProductCreate() {
  // const [nombre, setNombre] = useState('');
  const navigate = useNavigate();

  const [nombreProps, setNombre] = useInput<string>('');
  const [precioProps, setPrecio] = useInput<number>(0.0);

  const handleSubmitAsync = async (event: SyntheticEvent) => {
    event.preventDefault();

    const ps = new ProductService();
    const producto:IProduct = { 
      id: 0, productName: '', unitPrice: 0.0, quantityPerUnit: '' 
    }
    producto.productName = (nombreProps as IInput<string>).value;
    producto.unitPrice = (precioProps as IInput<number>).value;

    await ps.save(producto);

    alert('¡Guardado!');
    
    navigate("/product");
  }

  return (
    <>
        <h3>Product - Create</h3>
        <form onSubmit={handleSubmitAsync}>
          <label>Nombre </label>
          {/* <input type="text" value={nombre}          
          onChange={(event) => setNombre(event.target.value)}/> */}

          <input type="text" {...nombreProps}/>
          <br/>
          <label>Precio </label>
          <input type="number" {...precioProps}/>
          <br/>
          <button>Guardar</button>
        </form>
    </>    
  )
}

export default ProductCreate