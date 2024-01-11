import { Navigate, createBrowserRouter } from "react-router-dom";
import App from "./App";
import Error from "./Error";
import ProductMain from "./app/product/ProductMain";
import ProductCreate from "./app/product/ProductCreate";
import ProductDetail from "./app/product/ProductDetail";
import { productLoader } from "./loaders/productLoader";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
        {
            // /product
            path: "product",
            element: <ProductMain/>,
            children: [
                {
                    path: "create",
                    element: <ProductCreate/>
                },
                {
                    // /product/details/1                    
                    //path: "details/:id",
                    // /product/1
                    path: ":id",
                    element: <ProductDetail/>,
                    loader: productLoader
                }                
            ]
        }
    ]
  },
  {
    path: "/about",
    element: (
      <>
        <h1>About</h1>
      </>
    ),
  },
]);

export default router;
