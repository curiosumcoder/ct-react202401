import IProduct from "../model/IProduct";

const PRODUCT_URL = 'http://localhost:3000/products';

export default class ProductService {
  async get(id:number): Promise<IProduct | undefined> {
    const response = await fetch(`${PRODUCT_URL}/${id}`);

    if (response.ok) {
      const data = await response.json();
      return data;
    }

    return undefined
  }

  async search(filter:string = ""): Promise<Array<IProduct>> {
    const url = `${PRODUCT_URL}?productName_like=${filter}`;
    //console.log(`URL: ${url}`);

    const response = await fetch(url);

    let data:Array<IProduct> = [];
    if (response.ok) {
      data = await response.json();
    }

    return data;
  }

  async save(data:IProduct) {
    const postResponse = await fetch(`${PRODUCT_URL}`, {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (postResponse.ok) {
      alert("¡La operación fué satisfactoria!");
    }
  }

  async edit(id:number, data:IProduct) {
    const putResponse = await fetch(`${PRODUCT_URL}/${id}`, {
      method: "put",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (putResponse.ok) {
      alert("¡La operación fué satisfactoria!");
    }
  }

  async delete(id:number) {
    const response = await fetch(`${PRODUCT_URL}/${id}`, {
      method: "delete",
    });

    if (response.ok) {
      alert("¡La operación fué satisfactoria!");
    }
  }
}
