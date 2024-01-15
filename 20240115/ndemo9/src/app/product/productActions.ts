"use server";

import { redirect } from "next/navigation";
import { revalidatePath } from 'next/cache'
import ProductService from "../_services/ProductService";
import IProduct from "../_models/IProduct";

export async function searchProduct(prevState: any, formData: FormData) : Promise<Array<IProduct> | []> {

    const ps = new ProductService();
    const filter = formData.get('filter')?.valueOf() as string;

    if (filter) {
        return await ps.search(filter);
    }

    return [];
  }

export async function deleteProduct(formData: FormData) {

    const ps = new ProductService();
    const id = formData.get("id")?.valueOf();

    console.log(`Deleting product with id ${id} ...`);

    if (id) {
        await ps.delete(Number(id));
    }

    revalidatePath('/product')
    redirect('/product'); 
  }