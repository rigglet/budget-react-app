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
    <Table celled>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell textAlign="center">Category</Table.HeaderCell>
          <Table.HeaderCell textAlign="center">Item</Table.HeaderCell>
          <Table.HeaderCell textAlign="center">Frequency</Table.HeaderCell>
          <Table.HeaderCell textAlign="center">Amount</Table.HeaderCell>
          <Table.HeaderCell textAlign="center">Paid?</Table.HeaderCell>
          <Table.HeaderCell textAlign="center">Actions</Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {budgetItems
          .sort((a, b) => (a.category > b.category ? 1 : -1))
          //.sort((a, b) => (a.item > b.item ? 1 : -1))
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
