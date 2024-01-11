import React, { useEffect, useMemo, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import ProductService from "../../services/ProductService";
import IProduct from "../../models/IProduct";

function ProductDetail() {
    // Opción 2
    const product:IProduct = useLoaderData() as IProduct;

    // Opción 1
    // const ps = useMemo(() => new ProductService(), []);
    // const [product, setProduct] = useState<IProduct | null>();

    // const parametros = useParams();
    // const {id} = useParams();
  
    // useEffect(() => {
    //   (async () => {
    //     setProduct(await ps.get(Number(id)));
    //   })();
    // }, [ps, id]);

  return (
    <>      
      <h3>Product - Detail</h3>
      {/* {id} */}
      {product?.productName}
      {/* {JSON.stringify(parametros)} */}
    </>
  );
}

export default ProductDetail;
