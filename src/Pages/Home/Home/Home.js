import React from "react";
import useProducts from "../../../hooks/useProduct";
import Footer from "../../SharedPages/Footer/Footer";
import Bannar from "../Bannar/Bannar";
import Product from "../Product/Product";

const Home = () => {
  const [products] = useProducts();

  return (
    <div>
      <Bannar></Bannar>
      <div className="container p-2">
        <h1 className="text-center mt-5">
          <span className="text-primary fw-bold">Inventory</span>
        </h1>
        <div className="row">
          {products.slice(0, 6).map((product) => (
            <Product key={product.id} product={product}></Product>
          ))}
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Home;
