import React from "react";
import { Container, Table } from "semantic-ui-react";
import { FcDataSheet } from "react-icons/fc";

const Budget = (props) => {
  const { yearlyNet, monthlyNet, weeklyNet } = props.incomeData;
  const { allocated, remaining } = props.budgetData;

  return (
    <>
      <Container className="budget-overview-container">
        <FcDataSheet className="form-icons" />
        <h3 className="container-header">Budget</h3>
        <Table celled>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Annual Salary (Net)</Table.HeaderCell>
              <Table.HeaderCell>Monthly Salary (Net)</Table.HeaderCell>
              <Table.HeaderCell>Weekly Salary (Net)</Table.HeaderCell>
              <Table.HeaderCell>Alocated</Table.HeaderCell>
              <Table.HeaderCell>Remaining</Table.HeaderCell>
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
              <Table.Cell>
                <span className="figures">£{allocated}</span>
              </Table.Cell>
              <Table.Cell>
                <span className="figures">£{remaining}</span>
              </Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
      </Container>
      <Container className="budget-container">
        <h1>Budget</h1>
      </Container>
    </>
  );
};

export default Budget;
