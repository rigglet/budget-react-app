import React from "react";
import { Container } from "semantic-ui-react";
import { FcDataSheet } from "react-icons/fc";

const Budget = () => {
  return (
    <>
      <Container className="income-container">
        <FcDataSheet className="form-icons" />
        <h3 className="container-header">Budget</h3>
      </Container>
    </>
  );
};

export default Budget;
