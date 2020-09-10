import React from "react";
import { Container } from "semantic-ui-react";
import { FcComboChart } from "react-icons/fc";

const Overview = () => {
  return (
    <>
      <Container className="income-container">
        <FcComboChart className="form-icons" />
        <h3 className="container-header">Overview</h3>
      </Container>
    </>
  );
};

export default Overview;
