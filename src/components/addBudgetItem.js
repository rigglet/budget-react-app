import React, { useState } from "react";
import { Form } from "semantic-ui-react";
// import { GlobalContext } from "../context/GlobalState";

export const AddBudgetItem = () => {
  const [amount, setAmount] = useState(0);
  const [category, setCategory] = useState("");
  const [item, setItem] = useState("");
  const [frequency, setFrequency] = useState("");

  const freqOptions = [
    { key: "d", text: "Daily", value: "daily" },
    { key: "w", text: "Weekly", value: "weekly" },
    { key: "m", text: "Monthly", value: "monthly" },
    { key: "a", text: "Annually", value: "Annually" },
  ];
  //const { addTransaction } = useContext(GlobalContext);

  const onSubmit = (e) => {
    e.preventDefault();

    // const newItem = {
    //   id: Math.floor(Math.random() * 100000000),
    //   category: category,
    //   item: item,
    //   frequency: frequency,
    //   amount: amount,
    // };

    //addTransaction(newTransaction);
  };

  return (
    <>
      <h3>Add budget item</h3>
      <Form>
        <Form.Group widths="equal">
          <Form.Input
            fluid
            label="Category"
            labelposition="left corner"
            type="text"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            placeholder="Category..."
          />
          <Form.Input
            fluid
            label="Item"
            labelposition="left corner"
            type="text"
            value={item}
            onChange={(e) => setItem(e.target.value)}
            placeholder="Item..."
          />
          <Form.Select
            fluid
            label="Frequency"
            labelposition="left corner"
            placeholder="Frequency..."
            options={freqOptions}
            value={frequency}
            onChange={(e) => setFrequency(e.target.value)}
          />
          <Form.Input
            fluid
            label="Amount"
            labelposition="left corner"
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter amount..."
          />
          <Form.Button onClick={onSubmit} id="addButton">
            Add Item
          </Form.Button>
        </Form.Group>
      </Form>
    </>
  );
};
