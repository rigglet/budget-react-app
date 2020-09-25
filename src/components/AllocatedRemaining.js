import React, { useContext } from "react";
import { Table } from "semantic-ui-react";
import { GlobalContext } from "../context/GlobalState";

const AllocatedRemaining = () => {
  const { budgetItems, income } = useContext(GlobalContext);
  console.log(income.monthlyNet);

  const allocated = budgetItems.map((item) => item.amount);
  //const allocated = [1, 2, 3, 4, 5];
  const subTotal = allocated.reduce((acc, current) => acc + current).toFixed(2);
  const remaining = (income.monthlyNet - subTotal).toFixed(2);
  // const remaining = 0;
  // const allocated = 0;
  return (
    <>
      <Table celled collapsing>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Allocated</Table.HeaderCell>
            <Table.HeaderCell>Remaining</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          <Table.Row>
            <Table.Cell>
              <span className="figures" id="allocated">
                £{subTotal}
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
