'use client'

import React, { SyntheticEvent, useState } from 'react'
import IProduct from '../_models/IProduct';
import ProductService from '../_services/ProductService';
import Link from 'next/link';

function Product() {
    let [filtro, setFiltro] = useState("");
    let [productos, setProductos] = useState(Array<IProduct>);
  
    async function searchAsync(ev: SyntheticEvent) {
        ev.preventDefault();
        console.log("Buscando ...");
    
        const ps = new ProductService();
        const data = await ps.search(filtro);
    
        console.log(data);
        setProductos(data);
      }

  return (
    <>
    <h1>Product</h1>
    <Link href="/product/create">Create</Link>  
    <form onSubmit={searchAsync}>
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
              <th></th>
            </tr>
          </thead>
          <tbody>
            {productos.map((p) => (
              <tr key={p.id}>
                <td>{p.id}</td>
                <td>{p.productName}</td>
                <td>{p.unitPrice}</td>
                <td>
                    <Link href={`/product/${p.id}`}>
                      Detail
                    </Link>
                  </td>
              </tr>
            ))}
          </tbody>
        </table>
    </>
  )
}

export default Product