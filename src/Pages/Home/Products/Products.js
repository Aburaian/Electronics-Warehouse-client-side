import React from "react";
import useProducts from "../../../hooks/useProduct";
import Product from "../Product/Product";

const Products = () => {
  const [products] = useProducts();
  return (
    <div className="container p-2">
      <h1 className="text-center mt-5">
        <span className="text-primary fw-bold">Inventory</span>
      </h1>
      <div className="row">
        {products.map((product) => (
          <Product key={product.id} product={product}></Product>
        ))}
      </div>
    </div>
  );
};

export default Products;
