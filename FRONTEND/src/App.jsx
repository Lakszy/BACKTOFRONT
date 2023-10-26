import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  //  TODO :  1.using axios   2.useEffect   3.map through the data

  const [products, setProducts] = useState([]);

  useEffect(() => {
     axios
      .get("/api/products")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.log(error.message);
      });
  },[]);

  return (
    <>
      <h2>NO of Products are: {products.length}</h2>
      {products.map((product) => (
        <div key={product.id}>
          <h1>{product.title}</h1>
          <h2>{product.content}</h2>
        </div>
      ))}
    </>
  );
}

export default App;
