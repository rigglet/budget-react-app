import React, { useContext, useEffect } from "react";
import BudgetCard from "./BudgetCard";
import { SavedDataContext } from "../../context/AppState";
import nextId from "react-id-generator";

const SavedBudgetList = () => {
  const { savedBudgets } = useContext(SavedDataContext);
  useEffect(() => {
    window.localStorage.setItem("EXPENSE-APP", JSON.stringify({savedBudgets: savedBudgets}));
  }, [savedBudgets])

  return (
    <>
      {savedBudgets.length > 0
        ? savedBudgets.map((budget) => {
            return <BudgetCard key={nextId()} budget={budget} />;
          })
        : null}
    </>
  );
};

export default SavedBudgetList;
