import React, { useContext, useRef } from "react";
import { GlobalContext } from "../context/GlobalState";
import { Form, Table } from "semantic-ui-react";
import ContentEditable from "react-contenteditable";

const BudgetItem = (budgetItem) => {
  const { id, category, item, frequency, amount } = budgetItem;
  const { deleteBudgetItem, editBudgetItem } = useContext(GlobalContext);
  const editedBudgetItem = useRef("");

  const handleChange = (evt) => {
    editedBudgetItem.current = evt.target.value;
  };

  const handleBlur = () => {
    console.log(editedBudgetItem.current);
    const editItem = {
      ...budgetItem,
      category: editedBudgetItem.current,
    };
    editedBudgetItem.current.length > 0
      ? editBudgetItem(editItem)
      : console.log("not changed");
  };

  return (
    <Table.Row className="budgetName">
      <Table.Cell>
        <ContentEditable
          html={category}
          onBlur={handleBlur}
          onChange={handleChange}
        />
      </Table.Cell>
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
