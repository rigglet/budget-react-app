import React from "react";
import { Table } from "semantic-ui-react";

const AllocatedRemaining = (props) => {
  console.log(props);
  const { allocated, remaining } = props.budgetData;

  return (
    <>
      <Table celled collapsing>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Alocated</Table.HeaderCell>
            <Table.HeaderCell>Remaining</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          <Table.Row>
            <Table.Cell>
              <span className="figures" id="allocated">
                £{allocated}
              </span>
            </Table.Cell>
            <Table.Cell>
              <span className="figures" id="remaining">
                £{remaining}
              </span>
            </Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </>
  );
};

export default AllocatedRemaining;
