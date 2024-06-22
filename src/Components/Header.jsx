import React from "react";
import { Container } from "react-bootstrap";
import { useSelector } from "react-redux";

const Header = () => {
  const List = useSelector((state) => state.prodreducer);

  const totalPrice = List.reduce(
    (total, data) => total + data.price * (data.quantity || 1),
    0
  );

  const totalQuantity = List.reduce(
    (total, data) => total + (data.quantity || 1),
    0
  );
  return (
    <div className="container-fluid">
      <div className="row p-5">
        <div className="col-md-12">
          <div className="header">
            <h1 className="title text-center mt-2 mb-5 ">React Redux</h1>
            <div className="d-flex justify-content-between align-content-center flex-wrap px-5">
              <h3 className="total">Total Quantity:</h3>
              <h3> {totalQuantity}</h3>
            </div>
            <br />
            <div className="d-flex justify-content-between align-content-center flex-wrap px-5">
              <h3 className="total">Total Price:</h3>
              <h3> {totalPrice}</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
