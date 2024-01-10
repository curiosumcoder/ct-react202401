import { useRef, useState, SyntheticEvent } from "react";
import IProduct from "../../models/IProduct";
import ProductService from "../../services/ProductService";

type productCreateProps = { onCreate?: () => void };
function ProductCreate({ onCreate }: productCreateProps) {
  const form = useRef<HTMLFormElement>(null);
  const iName = useRef<HTMLInputElement>(null);
  const iUnitPrice = useRef<HTMLInputElement>(null);
  const iQuantityPerUnit = useRef<HTMLInputElement>(null);
  const [isValid, setIsValid] = useState(false);

  const handleSubmit = async (event: SyntheticEvent) => {
    event.preventDefault();

    const ps = new ProductService();
    const product: IProduct = {
      id: 0,
      productName: iName.current?.value ?? "",
      unitPrice: iUnitPrice.current?.valueAsNumber ?? 0,
      quantityPerUnit: iQuantityPerUnit.current?.value ?? "",
    };

    await ps.save(product);
    onCreate?.();
  };

  const checkValidation = (event: SyntheticEvent) => {
    const target = event.target as HTMLInputElement;
    if (target) {
      const formIsValid = form.current?.checkValidity() ?? false;
      console.log(formIsValid);
      setIsValid(formIsValid);

      console.log(target.validity);
      if (!target.validity.valid) {
        target.classList.add("is-invalid");
      } else {
        target.classList.remove("is-invalid");
        target.classList.add("is-valid");
      }
    }
  };

  return (
    <>
      <h5>Product - Create</h5>
      <form className="row g-3" onSubmit={(event) => handleSubmit(event)} ref={form}>
        <div className="mb-3">
          <label htmlFor="iName" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="iName"
            placeholder="Name"
            required
            minLength={2}
            ref={iName}
            onChange={(event) => checkValidation(event)}
          />
        </div>
        <label htmlFor="iUnitPrice" className="form-label">
          Unit Price
        </label>
        <input
          type="number"
          className="form-control"
          id="iUnitPrice"
          placeholder="Unit Price"
          required
          min={1}
          ref={iUnitPrice}
          onChange={(event) => checkValidation(event)}
        />
        <label htmlFor="iQuantityPerUnit" className="form-label">
          Quantity Per Unit
        </label>
        <input
          type="text"
          className="form-control"
          id="iQuantityPerUnit"
          placeholder="Quantity Per Unit"
          required
          minLength={6}
          ref={iQuantityPerUnit}
          onChange={(event) => checkValidation(event)}
        />
        <br/>
        {isValid}
        <button type="submit" className="btn btn-primary" disabled={!isValid}>
          Save
        </button>
      </form>
    </>
  );
}

export default ProductCreate;
