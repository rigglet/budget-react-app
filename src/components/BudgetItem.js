import React from "react";
import { useId } from "react-id-generator";

const BudgetItem = (props) => {
  const [htmlId] = useId();
  return (
    <>
      <li key={htmlId} className="budgetItem">
        {props.category} - {props.item} - {props.frequency} - {props.amount}
      </li>
      {/* <li className={transaction.amount < 0 ? 'minus' : 'plus'}>
      {transaction.text} <span>{sign}${Math.abs(transaction.amount)}</span><button onClick={() => deleteTransaction(transaction.id)} className="delete-btn">x</button>
    </li> */}
    </>
  );
};

export default BudgetItem;
