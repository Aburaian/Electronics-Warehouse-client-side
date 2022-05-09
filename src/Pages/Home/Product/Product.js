import React from "react";
import { Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Product = ({ product }) => {
  const { _id, price, img, supplierName, description, name, quantity } =
    product;

  const navigate = useNavigate();

  const navigateUpdate = (id) => {
    navigate(`/products/${id}`);
  };
  const addNavigate = () => {
    navigate("/addItems");
  };

  const handleDelete = (id) => {
    const proceed = window.confirm("Are you sure?");
    if (proceed) {
      const url = `https://stark-coast-67001.herokuapp.com/product/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
        });
    }
  };

  return (
    <div className="col-lg-4 col-md-6 col-sm-12 p-4">
      <Card style={{ width: "22rem" }}>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>{description}</Card.Text>
          <Card.Text>
            <span className="fw-bold">supplier Name:</span> {supplierName}
          </Card.Text>
          <Card.Text>
            <span className="fw-bold">Price:</span> ${price}
          </Card.Text>
          <Card.Text>
            <span className="fw-bold">Available Quantity:</span> {quantity}
          </Card.Text>
          <Button
            onClick={() => navigateUpdate(_id)}
            className="text-uppercase me-4 text-center"
            variant="primary"
          >
            Update
          </Button>
          <Button
            onClick={() => handleDelete(_id)}
            className="text-uppercase me-4 text-center"
            variant="primary"
          >
            Delete
          </Button>
          <Button
            onClick={addNavigate}
            className="text-uppercase me-4 text-center"
            variant="primary"
          >
            Add
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Product;
