import React from "react";
import { Container } from "semantic-ui-react";
import { FcTodoList } from "react-icons/fc";

const Summary = () => {
  return (
    <>
      <Container className="income-container">
        <FcTodoList className="form-icons" />
        <h3 className="container-header">Summary</h3>
      </Container>
    </>
  );
};

export default Summary;
