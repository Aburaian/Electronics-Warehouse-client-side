import React, { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";

const ProductDetail = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState({});
  useEffect(() => {
    const url = `http://localhost:5000/product/${productId}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [productId, product]);

  const handleDelivered = () => {
    fetch(`http://localhost:5000/product/${productId}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        quantity: product.quantity - 1,
      }),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  const handleStock = (e) => {
    e.preventDefault();
    const number = e.target.number.value;
    if (number > 0) {
      const updateQuantity = product?.quantity + parseInt(number);
      fetch(`http://localhost:5000/product/${productId}`, {
        method: "put",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({ updateQuantity }),
      })
        .then((res) => res.json())
        .then((data) => console.log(data));

      alert("users added successfully!!!");
      e.target.reset();
    } else {
      toast.error("put a valid integer number", {
        id: "putValid",
        duration: 5000,
      });
    }
  };
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
              onClick={handleDelivered}
              className="text-uppercase text-center"
              variant="primary"
            >
              Delivered
            </Button>
            <div className="mt-2">
              <input
                type="number"
                id="number"
                className="form-control"
                placeholder="Type number"
                required
              />
            </div>

            <Button
              onClick={handleStock}
              className="mt-2 text-uppercase text-center"
              variant="primary"
            >
              Send
            </Button>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default ProductDetail;
