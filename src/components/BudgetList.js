import React, { useContext } from "react";
import BudgetItem from "./BudgetItem";
import { GlobalContext } from "../context/GlobalState";
import { Table } from "semantic-ui-react";
import nextId from "react-id-generator";

const BudgetList = () => {
  // const [htmlId] = nextId("budget");
  const { budgetItems } = useContext(GlobalContext);
  //console.log(budgetItems);

  return (
    <Table celled collapsing>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Category</Table.HeaderCell>
          <Table.HeaderCell>Item</Table.HeaderCell>
          <Table.HeaderCell>Frequency</Table.HeaderCell>
          <Table.HeaderCell>Amount</Table.HeaderCell>
          <Table.HeaderCell>Paid?</Table.HeaderCell>
          <Table.HeaderCell>Actions</Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {budgetItems
          .sort((a, b) => (a.category > b.category ? 1 : -1))
          .map((item) => (
            <BudgetItem
              id={item.id}
              key={nextId()}
              category={item.category}
              item={item.item}
              frequency={item.frequency}
              amount={item.amount}
            />
          ))}
      </Table.Body>
    </Table>
  );
};

export default BudgetList;
