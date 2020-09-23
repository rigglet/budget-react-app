import React, { useContext } from "react";
import BudgetItem from "./BudgetItem";
import { GlobalContext } from "../context/GlobalState";

const BudgetList = () => {
  const context = useContext(GlobalContext);
  console.log(context.budgetItems);

  return (
    <ul id="budgetList">
      {context.budgetItems.map((item) => (
        <BudgetItem
          category={item.category}
          item={item.item}
          frequency={item.frequency}
          amount={item.amount}
        />
      ))}
    </ul>
  );
};

export default BudgetList;
