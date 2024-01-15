import IProduct from "@/app/_models/IProduct";
import sqlite3 from "sqlite3";

const dbFilePath = "./src/app/_data/Northwind.db";

export async function GET(
  request: Request,
  { params }: { params: { filtro: string } }
) {
  const { filtro } = params;

  // Get data from your database
  if (filtro) {
    console.log(`Searching for ${filtro} ...`);
    const data = await queryDB(filtro);
    console.log(data);
    if (data.length > 0) {
      return Response.json(data);
    } else {
      return new Response("", { status: 404 });
    }
  } else {
    return new Response("", { status: 200 });
  }
}

const queryDB = (filter: string) =>
  new Promise<Array<IProduct>>((resolve, reject) => {
    let result = Array<IProduct>();

    //sqlite3.verbose();
    let db = new sqlite3.Database(dbFilePath);

    let sql = `SELECT ProductID, ProductName, SupplierID, CategoryID, QuantityPerUnit, 
    UnitPrice, UnitsInStock, UnitsOnOrder, ReorderLevel, Discontinued 
    FROM Products WHERE ProductName LIKE ?`;

    filter = `%${filter}%`;
    console.log(`Quering with filter ${filter} ...`);

    db.all(sql, [filter], (err: any, rows: any) => {
      if (err) {
        reject(err);
      }

      rows.forEach((row: any) => {
        const {
          ProductID: id,
          ProductName: productName,
          UnitPrice: unitPrice,
          QuantityPerUnit: quantityPerUnit,
        } = row;
        const p:IProduct = { id, productName, unitPrice, quantityPerUnit, quantity: 1 };
        result = [p, ...result];
      });

      // close the database connection
      db.close();

      resolve(result);
    });
  });