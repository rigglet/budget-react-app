import React from "react";
import { Table } from "semantic-ui-react";

const SalaryBreakdown = (props) => {
  const { yearlyNet, monthlyNet, weeklyNet } = props.incomeData;

  return (
    <>
      <Table celled collapsing>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Annual Salary (Net)</Table.HeaderCell>
            <Table.HeaderCell>Monthly Salary (Net)</Table.HeaderCell>
            <Table.HeaderCell>Weekly Salary (Net)</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          <Table.Row>
            <Table.Cell>
              <span className="figures">£{yearlyNet}</span>
            </Table.Cell>
            <Table.Cell>
              <span className="figures">£{monthlyNet}</span>
            </Table.Cell>
            <Table.Cell>
              <span className="figures">£{weeklyNet}</span>
            </Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </>
  );
};

export default SalaryBreakdown;
