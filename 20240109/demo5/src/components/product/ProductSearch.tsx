import React, { useRef, SyntheticEvent } from "react";
import ProductService from "../../services/ProductService";

function ProductSearch({ onResults }: { onResults: Function }) {
    // Uncontrolled form elements
  const iFilter = useRef<HTMLInputElement>(null);

  const searchAsync = async (event: SyntheticEvent) => {
    event.preventDefault();
    const filter = iFilter.current?.value ?? "";
    if (filter) {
      console.log(`Searching REST service for ${filter} ...`);
      const ps = new ProductService();
      try {
        const filtered = await ps.search(filter);

        onResults?.(filtered);
      } catch (error) {
        console.error(error)
      }
    }
  };

  return (
    <>
      <h6>Product Search</h6>
      <form onSubmit={(event) => searchAsync(event)}>
        <input type="text" ref={iFilter}></input>
        <button type="submit">Search</button>
      </form>
    </>
  );
}

export default ProductSearch;
