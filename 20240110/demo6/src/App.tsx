import { useState } from "react";
import "./App.css";
import ProductCreate from "./components/product/ProductCreate";
import ProductDetails from "./components/product/ProductDetails";
import ProductSearch from "./components/product/ProductSearch";
import ProductList from "./components/product/ProductList";
import IProduct from "./models/IProduct";
import AppState from "./models/AppState";

function App() {
  const [appState, setAppState] = useState(AppState.Search);
  const [products, setProducts] = useState(Array<IProduct>());
  const [productId, setProductId] = useState<number>(0);

  return (
    <>
      <nav className="navbar bg-light">
        <div className="container-fluid">
          <a
            className="navbar-brand"
            href="#"
            onClick={() => setAppState(AppState.Search)}>
            App
          </a>
        </div>
      </nav>
      <div className="container" 
          style={{ marginTop: "1em", backgroundColor: "white" }}>
        {appState === AppState.Create && (
          <ProductCreate onCreate={() => setAppState(AppState.Search)} />
        )}
        {appState === AppState.Details && productId > 0 && (
          <ProductDetails
            id={productId}
            onDelete={() => {
              setProductId(0);
              setAppState(AppState.Search);
            }}
          />
        )}
        {appState === AppState.Search && (
          <>
            <button
              className="btn btn-primary"
              onClick={() => setAppState(AppState.Create)}
            >
              New
            </button>
            <ProductSearch
              onResults={(results: Array<IProduct>) => setProducts(results)}
            />
            <hr />
            <ProductList
              products={products}
              onSelect={(p: IProduct) => {
                setProductId(p.id);
                setAppState(AppState.Details);
              }}
            />
          </>
        )}
      </div>
    </>
  );
}

export default App;
