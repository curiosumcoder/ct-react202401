import IProduct from "@/app/_models/IProduct";
import ProductService from "@/app/_services/ProductService";
import { deleteProduct } from "../productActions";

async function ProductDetail({ params }: { params: { id: number } }) {
  const { id } = params;

  const ps = new ProductService();
  const product: IProduct | null = await ps.get(id);

  return (
    <>
      <h2>Product - Detail</h2>
      {product && (
        <>
          <h6>Product Details</h6>
          <dl>
            <dt>Id</dt>
            <dd>{product?.id}</dd>
            <dt>Name</dt>
            <dd>{product?.productName}</dd>
            <dt>Unit Price</dt>
            <dd>{product?.unitPrice}</dd>
            <dt>Quantity Per Unit</dt>
            <dd>{product?.quantityPerUnit}</dd>
          </dl>
          <form action={deleteProduct}>
            <input type="hidden" name="id" value={product?.id} />
            <button type="submit">Delete</button>
          </form>
        </>
      )}
      {!product && <p>No product details to show!</p>}
    </>
  );
}

export default ProductDetail;