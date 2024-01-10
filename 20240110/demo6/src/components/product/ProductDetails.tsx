import { SyntheticEvent, useState, useEffect, useMemo } from "react";
import IProduct from "../../models/IProduct";
import ProductService from "../../services/ProductService";

function ProductDetails({
  id,
  onDelete,
}: {
  id: number;
  onDelete?: () => void;
}) {
  const ps = useMemo(() => new ProductService(), []);

  const [product, setProduct] = useState<IProduct>();

  useEffect(() => {
    (async () => {
      setProduct(await ps.get(id));
    })();
  }, [ps, id]);

  const handleSubmit = async (event: SyntheticEvent) => {
    event.preventDefault();

    if (confirm("¿Desea proceder con la eliminación?")) {
      await ps.delete(id);
      onDelete?.();
    }
  };

  return (
    <>
      {product && (
        <>
          <h5>Product - Details</h5>
          <form className="row g-3" onSubmit={(event) => handleSubmit(event)}>
            <div className="mb-3">
              <label htmlFor="iId" className="form-label">
                Id
              </label>
              <input
                type="text"
                className="form-control"
                id="iId"
                readOnly
                value={product?.id}
              />
              <label htmlFor="iName" className="form-label">
                Name
              </label>
              <input
                type="text"
                className="form-control"
                id="iName"
                readOnly
                value={product?.productName}
              />
              <label htmlFor="iUnitPrice" className="form-label">
                Unit Price
              </label>
              <input
                type="number"
                className="form-control"
                id="iUnitPrice"
                readOnly
                value={product?.unitPrice}
              />
              <label htmlFor="iQuantityPerUnit" className="form-label">
                Quantity Per Unit
              </label>
              <input
                type="text"
                className="form-control"
                id="iQuantityPerUnit"
                readOnly
                value={product?.quantityPerUnit}
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Delete
            </button>
          </form>
        </>
      )}
      {!product && (
        <p className="alert alert-info ">No product details to show!</p>
      )}
    </>
  );
}

export default ProductDetails;
