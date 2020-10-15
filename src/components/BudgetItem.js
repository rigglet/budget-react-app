import React, { useContext, useRef } from "react";
import { GlobalContext } from "../context/GlobalState";
import { Form, Table } from "semantic-ui-react";
import ContentEditable from "react-contenteditable";
import EditInput from "../components/EditInput";

const BudgetItem = (budgetItem) => {
  const { id, category, item, frequency, amount } = budgetItem;
  const { deleteBudgetItem, editBudgetItem } = useContext(GlobalContext);
  const editedBudgetItem = useRef("");

  const handleChange = (evt) => {
    editedBudgetItem.current = evt.target.value;
    console.log(evt);
  };

  const handleCategoryBlur = () => {
    const editItem = {
      ...budgetItem,
      category: editedBudgetItem.current,
    };
    if (editedBudgetItem.current.length > 0) editBudgetItem(editItem);
  };

  // function editFigure(e) {
  //   console.log(e.currentTarget);
  // }

  return (
    <Table.Row className="budgetName">
      <Table.Cell>
        <ContentEditable
          html={category}
          onBlur={handleCategoryBlur}
          onChange={handleChange}
        />
      </Table.Cell>
      <Table.Cell>
        <EditInput v={item} onChange={handleChange}></EditInput>
      </Table.Cell>
      <Table.Cell>{frequency}</Table.Cell>
      <Table.Cell>
        <span className="figures">£{amount.toFixed(2)}</span>
      </Table.Cell>
      <Table.Cell textAlign="center">
        <Form.Checkbox></Form.Checkbox>
      </Table.Cell>
      <Table.Cell textAlign="center">
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
