import React from "react";
import { Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Product = ({ product }) => {
  const { id, price, img, description, name, quantity } = product;
  const navigate = useNavigate();

  const navigateUpdate = (id) => {
    navigate(`/products/${id}`);
  };

  return (
    <div className="col-lg-4 col-md-6 col-sm-12 p-4">
      <Card style={{ width: "22rem" }}>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>{description}</Card.Text>
          <Card.Text>
            <span className="fw-bold">Price:</span> ${price}
          </Card.Text>
          <Card.Text>
            <span className="fw-bold">Available Quantity:</span> {quantity}
          </Card.Text>
          <Button
            onClick={() => navigateUpdate(id)}
            className="text-uppercase text-center"
            variant="primary"
          >
            Update
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Product;
