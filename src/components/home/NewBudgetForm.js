import React, { useState, useContext } from "react";
import { Form } from "semantic-ui-react";
import { SavedDataContext, AppProvider } from "../../context/AppState";


const NewBudgetForm = (props) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const { addBudget } = useContext(SavedDataContext);

  //console.log(`addBudget: ${addBudget}`);

  const onSubmit = (e) => {
    e.preventDefault();

    const date = new Date(Date.now());
    //const sd = date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear();
    const newBudget = {
      id: Math.floor(Math.random() * 100000000),
      saveName: name,
      description: description,
      saveDate: date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear(),
    };

    addBudget(newBudget);
    setName("");
    setDescription("");

  };

  return (
    <div className="container">
      <AppProvider>
        <Form>
          <Form.Group widths="equal">
            <Form.Input
              fluid
              label="Name"
              labelposition="left corner"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Name..."
            />
            <Form.Input
              fluid
              label="Description"
              labelposition="left corner"
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Description..."
            />
            <Form.Button onClick={onSubmit} id="addBudgetButton">
              New Budget
            </Form.Button>
          </Form.Group>
        </Form>
      </AppProvider>
    </div>
  );
};

export default NewBudgetForm;
