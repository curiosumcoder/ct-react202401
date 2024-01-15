import IProduct from "@/app/_models/IProduct";
import sqlite3 from "sqlite3";

const dbFilePath = "./src/app/_data/Northwind.db";

const insertDB = (p: IProduct) =>
  new Promise<IProduct | null>((resolve, reject) => {
    let result: IProduct;

    console.log(p);

    //sqlite3.verbose();
    let db = new sqlite3.Database(dbFilePath);

    const sql = `
    INSERT INTO Products (ProductName, SupplierID, CategoryID, QuantityPerUnit, UnitPrice, UnitsInStock, UnitsOnOrder, ReorderLevel, Discontinued)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`;

    db.run(
      sql,
      [p.productName,1,1,p.quantityPerUnit,p.unitPrice,1,1,1,1,],
      function  (err: any) {
        if (err) {
          reject(err);
        } else {
          console.log("Last inserted ID: " + this.lastID);
          console.log(p);

          result = { ...p, id: this.lastID };

          resolve(result);
        }

        // close the database connection
        db.close();
      }
    );
  });


export async function POST(request: Request) {
    const res = await request.json();
    const dbResult = await insertDB(res);
  
    if (dbResult !== null) {
      return Response.json(dbResult);
    } else {
      return new Response("", { status: 400 });
    }
  }