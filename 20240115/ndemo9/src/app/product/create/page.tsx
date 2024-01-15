import ProductService from "@/app/_services/ProductService";
import { redirect } from "next/navigation";
import React from "react";
import { useFormState } from "react-dom";

function ProductCreate() {
  async function createProduct(formData: FormData) {
    "use server";

    const product = {
      productName: formData.get("productName")?.valueOf(),
      unitPrice: formData.get("unitPrice")?.valueOf(),
      quantityPerUnit: formData.get("quantityPerUnit")?.valueOf(),
    };

    console.log(product);

    const ps = new ProductService();
    await ps.save(product as any);

    redirect("/product");
  }

  const initialState = {
    message: "",
  };
  //const [state, formAction] = useFormState(createProduct, initialState)

  return (
    <>
      <h2>Product - Create</h2>
      {/* {state?.message} */}
      <form action={createProduct}>
        <div>
          <label>Name</label>
          <input
            type="text"
            placeholder="Name"
            required
            minLength={2}
            maxLength={32}
            name="productName"
          />
          <label>Unit Price</label>
          <input
            type="number"
            placeholder="Unit Price"
            required
            min={1}
            name="unitPrice"
          />
          <label>Quantity Per Unit</label>
          <input
            type="text"
            placeholder="Quantity Per Unit"
            required
            minLength={2}
            name="quantityPerUnit"
          />
        </div>
        <button type="submit">Save</button>
      </form>
    </>
  );
}

export default ProductCreate;
