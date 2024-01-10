import { SyntheticEvent, useState } from "react";
import "./App.css";
import IProduct from "./IProducto";

function App() {
  const [filtro, setFiltro] = useState("");
  const [productos, setProductos] = useState(Array<IProduct>);

  async function searchAsync(ev: SyntheticEvent) {
    ev.preventDefault();
    console.log("Buscando ...");

    // Query String (GET)
    // const response = await fetch(`http://localhost:3000/products?productName_like=${filtro}&p2=${filtro}`);
    const response = await fetch(
      `http://localhost:3000/products?productName_like=${filtro}`
    );
    const data = await response.json();

    console.log(data);
    setProductos(data);

    // const responseP = fetch('http://localhost:3000/products?productName_like=queso')
    // responseP.then(v => {
    //   if (v.ok)
    //   {
    //     console.log(v)
    //     const dataP = v.json();
    //     dataP.then(j => console.log(j))
    //   }
    // }).catch(e => console.error(e))
  }

  return (
    <>
      <div className="container">
        <h1>App1</h1>
        <form onSubmit={searchAsync}>
          {/* {filtro} */}
          <input
            placeholder="Buscar aquí"
            onChange={(event) => setFiltro(event.target.value)}
            className="form-control"
          />
          <button type="submit" className="btn btn-primary" disabled={filtro === ''}>
            Buscar
          </button>
        </form>
        <hr />
        {productos.length > 0 && <strong>{productos.length}</strong>}
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Id</th>
              <th>Nombre</th>
              <th>Precio</th>
            </tr>
          </thead>
          <tbody>
            {productos.map((p) => (
              <tr key={p.id}>
                <td>{p.id}</td>
                <td>{p.productName}</td>
                <td>{p.unitPrice}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default App;
