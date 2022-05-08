import React, { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState({});
  useEffect(() => {
    const url = `http://localhost:5000/product/${productId}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [productId, product]);
  return (
    <div className="row w-50 mx-auto">
      <div className="col-lg-4 col-md-6 col-sm-12 p-4">
        <Card style={{ width: "35rem" }}>
          <Card.Img variant="top" src={product?.img} />
          <Card.Body>
            <Card.Title>{product.name}</Card.Title>
            <Card.Text>{product.description}</Card.Text>
            <Card.Text>
              <span className="fw-bold">supplier Name:</span>{" "}
              {product.supplierName}
            </Card.Text>
            <Card.Text>
              <span className="fw-bold">Price:</span> ${product.price}
            </Card.Text>
            <Card.Text>
              <span className="fw-bold">Available Quantity:</span>{" "}
              {product.quantity}
            </Card.Text>
            <Button
              // onClick={() => navigateUpdate(_id)}
              className="text-uppercase text-center"
              variant="primary"
            >
              Delivered
            </Button>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default ProductDetail;
