import React from "react";
import { FcHome } from "react-icons/fc";
import SavedBudgetList from "../components/home/SavedBudgetList";
import NewBudgetForm from "../components/home/NewBudgetForm";
import { AppProvider } from "../context/AppState";

const Home = () => {
  return (
    <div className="container">
      <AppProvider>
        <FcHome className="form-icons" />
        <h3 className="container-header">Home</h3>
        <NewBudgetForm />
        <SavedBudgetList />
      </AppProvider>
    </div>
  );
};

export default Home;
