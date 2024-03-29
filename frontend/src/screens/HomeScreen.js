import React, { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../components/Loader";
import Product from "../components/Product";
import Message from "../components/Message";

import { listProducts } from "../actions/productActions";

function HomeScreen() {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { error, loading, products } = productList;

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  return (
    <div>
      <h1>Latest Products</h1>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <Row>
          {products.map((aProduct) => (
            <Col key={aProduct._id} sm={12} md={6} lg={4} xl={3}>
              <Product product={aProduct} />
            </Col>
          ))}
        </Row>
      )}
    </div>
  );
}

export default HomeScreen;
