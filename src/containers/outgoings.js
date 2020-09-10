import React from "react";
import { Container } from "semantic-ui-react";
import { FcBearish } from "react-icons/fc";

const Outgoings = () => {
  return (
    <>
      <Container className="income-container">
        <FcBearish className="form-icons" />
        <h3 className="container-header">Outgoings</h3>
      </Container>
    </>
  );
};

export default Outgoings;
