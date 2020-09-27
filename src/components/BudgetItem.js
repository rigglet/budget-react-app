import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { Form, Table } from "semantic-ui-react";

const BudgetItem = ({ id, category, item, frequency, amount }) => {
  const { deleteBudgetItem } = useContext(GlobalContext);
  console.log(typeof amount);
  return (
    <Table.Row className="budgetName">
      <Table.Cell>{category}</Table.Cell>
      <Table.Cell>{item}</Table.Cell>
      <Table.Cell>{frequency}</Table.Cell>
      <Table.Cell>
        <span className="figures">£{amount.toFixed(2)}</span>
      </Table.Cell>
      <Table.Cell>
        <Form.Checkbox></Form.Checkbox>
      </Table.Cell>
      <Table.Cell>
        <button
          className="deleteBudgetItemButton"
          onClick={() => deleteBudgetItem(id)}
        >
          Delete
        </button>
      </Table.Cell>
    </Table.Row>
  );
};

export default BudgetItem;
