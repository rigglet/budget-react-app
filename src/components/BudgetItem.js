import React from "react";

import { Table } from "semantic-ui-react";

const BudgetItem = ({ category, item, frequency, amount }) => {
  return (
    <Table.Row>
      <Table.Cell>{category}</Table.Cell>
      <Table.Cell>{item}</Table.Cell>
      <Table.Cell>{frequency}</Table.Cell>
      <Table.Cell>
        <span className="figures">£{amount.toFixed(2)}</span>
      </Table.Cell>
    </Table.Row>
  );
};

export default BudgetItem;
