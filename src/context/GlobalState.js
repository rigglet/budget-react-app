import React, { useReducer, createContext } from "react";
import AppReducer from "./appReducer";

const initialState = {
  budgetItems: [
    {
      id: 1,
      category: "accommodation",
      item: "rent",
      frequency: "weekly",
      amount: 288.0,
    },
    {
      id: 2,
      category: "bills",
      item: "phone",
      frequency: "monthly",
      amount: 51.57,
    },
    {
      id: 3,
      category: "bills",
      item: "council tax",
      frequency: "monthly",
      amount: 11.39,
    },
    {
      id: 4,
      category: "car",
      item: "tax",
      frequency: "annually",
      amount: 150.0,
    },
    {
      id: 5,
      category: "car",
      item: "insurance",
      frequency: "annually",
      amount: 353.17,
    },
  ],
  income: {
    annual: "63000.00",
    allowance: "12509.00",
    taxable: "50491.00",
    tax: "12698.20",
    ni: "5120.00",
    contributions: "21802.08",
    yearlyNet: "41197.92",
    monthlyNet: "3433.16",
    weeklyNet: "792.27",
  },
};

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

  return (
    <GlobalContext.Provider
      value={{
        budgetItems: state.budgetItems,
        income: state.income,
        deleteBudgetItem,
        addBudgetItem,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
