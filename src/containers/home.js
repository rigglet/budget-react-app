import React from "react";
import { FcHome } from "react-icons/fc";
import BudgetCard from "../components/budgetCard";

const Home = () => {
  return (
    <>
      <div className="container">
        <FcHome className="form-icons" />
        <h3 className="container-header">Home</h3>
        <BudgetCard />
      </div>
    </>
  );
};

export default Home;
