import React from "react";
import useProducts from "../../../hooks/useProduct";
import Footer from "../../SharedPages/Footer/Footer";
import Bannar from "../Bannar/Bannar";
import InventoryGalary from "../InventoryGalary/InventoryGalary";
import Product from "../Product/Product";
import Reviews from "../Reviews/Reviews";

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
      <InventoryGalary></InventoryGalary>
      <Reviews></Reviews>
      <Footer></Footer>
    </div>
  );
};

export default Home;
