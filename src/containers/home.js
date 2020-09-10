import React from "react";
import { Container } from "semantic-ui-react";
import { FcHome } from "react-icons/fc";
import BudgetCard from "../components/budgetCard";

const Home = () => {
  return (
    <>
      <Container className="income-container">
        <FcHome className="form-icons" />
        <h3 className="container-header">Home</h3>
        <BudgetCard />
      </Container>
    </>
  );
};

export default Home;
