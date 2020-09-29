import React, { useContext } from "react";
import { Table } from "semantic-ui-react";
import { GlobalContext } from "../context/GlobalState";

const SalaryBreakdown = () => {
  const { income } = useContext(GlobalContext);
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
              <span className="figures">£{income.yearlyNet}</span>
            </Table.Cell>
            <Table.Cell>
              <span className="figures">£{income.monthlyNet}</span>
            </Table.Cell>
            <Table.Cell>
              <span className="figures">£{income.weeklyNet}</span>
            </Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </>
  );
};

export default SalaryBreakdown;
