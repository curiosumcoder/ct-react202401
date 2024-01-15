import IProduct from "@/app/_models/IProduct";
import sqlite3 from "sqlite3";

const dbFilePath = "./src/app/_data/Northwind.db";

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const { id } = params;

  // Get data from your database
  if (id) {
    console.log(`Searching for ${id} ...`);
    const data = await queryDB(id);

    console.log(data);

    if (data) {
      return Response.json(data);
    } else {
      return new Response("", { status: 404 });
    }
  } else {
    return new Response("", { status: 200 });
  }
}

const queryDB = (id: string) =>
  new Promise<IProduct>((resolve, reject) => {
    let result: IProduct;

    //sqlite3.verbose();
    let db = new sqlite3.Database(dbFilePath);

    let sql =
      "SELECT ProductID, ProductName, SupplierID, CategoryID, QuantityPerUnit, UnitPrice, UnitsInStock, UnitsOnOrder, ReorderLevel, Discontinued FROM Products WHERE ProductID = ?";

    console.log(`Quering with if ${id} ...`);

    db.get(sql, [id], (err: any, row: any) => {
      if (err) {
        reject(err);
      }

      if (row) {
        const {
          ProductID: id,
          ProductName: productName,
          UnitPrice: unitPrice,
          QuantityPerUnit: quantityPerUnit,
        } = row;
        result = { id, productName, unitPrice, quantityPerUnit, quantity: 1 };
      }

      // close the database connection
      db.close();

      resolve(result);
    });
  });

const deleteDB = (id: number) =>
  new Promise<void>((resolve, reject) => {
    //sqlite3.verbose();
    let db = new sqlite3.Database(dbFilePath);

    const sql = `DELETE FROM Products WHERE ProductID = ?`;

    db.run(sql, [id], function (err: any) {
      if (err) {
        reject(err);
      } else {
        resolve();
      }

      // close the database connection
      db.close();
    });
  });

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  const { id } = params;

  const dbResult = await deleteDB(Number(id));
  console.log('dbResult: '+  dbResult);

  if (dbResult !== null) {
    return new Response("", { status: 200 });
  } else {
    return new Response("", { status: 400 });
  }
}