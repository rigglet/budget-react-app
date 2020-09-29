import React from "react";
import { FcDataSheet } from "react-icons/fc";
import { AddBudgetItem } from "../components/addBudgetItem";
import BudgetList from "../components/BudgetList";
import SalaryBreakdown from "../components/SalaryBreakdown";
import AllocatedRemaining from "../components/AllocatedRemaining";
import { Grid } from "semantic-ui-react";

const Budget = (props) => {
  return (
    <>
      <div className="container">
        <FcDataSheet className="form-icons" />
        <h3 className="container-header">Budget</h3>

        <Grid columns={2} relaxed="very" stackable>
          <Grid.Column>
            <SalaryBreakdown />
          </Grid.Column>
          <Grid.Column>
            <AllocatedRemaining />
          </Grid.Column>
        </Grid>
      </div>

      <div className="budget-container">
        <AddBudgetItem />
        <BudgetList />
      </div>
    </>
  );
};

export default Budget;
