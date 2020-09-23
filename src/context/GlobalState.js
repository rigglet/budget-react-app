import React, { useReducer, createContext } from "react";
import AppReducer from "./appReducer";

const initialState = {
  budgetItems: [
    {
      category: "accommodation",
      item: "rent",
      frequency: "weekly",
      amount: 288.0,
    },
    { category: "bills", item: "phone", frequency: "monthly", amount: 51.57 },
    {
      category: "bills",
      item: "council tax",
      frequency: "monthly",
      amount: 11.39,
    },
    { category: "car", item: "tax", frequency: "annually", amount: 150.0 },
    {
      category: "car",
      item: "insurance",
      frequency: "annually",
      amount: 353.17,
    },
  ],
  income: {},
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  return (
    <GlobalContext.Provider
      value={{
        budgetItems: state.budgetItems,
        income: state.income,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
