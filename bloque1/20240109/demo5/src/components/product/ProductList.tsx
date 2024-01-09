import React from "react";
import IProduct from "../../model/IProduct";

function ProductList({ products }: { products: Array<IProduct> }) {
  if ((products as Array<IProduct>) && products.length > 0) {
    return (
      <>
        <h6>Product List</h6>
        <ul>
            {products.map((p:IProduct)=> (
                <li>{p.productID} - {p.productName}, {p.unitPrice}</li>
            ))}
        </ul>
      </>
    );
  } else {
    return (
      <>
        <p>¡No hay productos en la lista!</p>
      </>
    );
  }
}

export default ProductList;
