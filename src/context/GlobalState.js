import React, { useReducer, createContext } from "react";
import AppReducer from "./AppReducer";

//Dynamically change data depending on which budget is loaded
const initialState = JSON.parse(window.localStorage.getItem("EXPENSE"));
export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  function deleteBudgetItem(id) {
    dispatch({
      type: "DELETE_BUDGET_ITEM",
      payload: id,
    });
  }

  function addBudgetItem(budgetItem) {
    dispatch({
      type: "ADD_BUDGET_ITEM",
      payload: budgetItem,
    });
  }

  function editBudgetItem(budgetItem) {
    dispatch({
      type: "EDIT_BUDGET_ITEM",
      payload: budgetItem,
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        budgetItems: state.budgetItems,
        income: state.income,
        deleteBudgetItem,
        addBudgetItem,
        editBudgetItem,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
