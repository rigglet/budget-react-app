import React from "react";
import { Card, Button } from "semantic-ui-react";

const BudgetCard = () => {
  return (
    <>
      <Card>
        <Card.Content>
          <Card.Header>Budget 1</Card.Header>
          <Card.Meta>
            <span className="date">Saved 9/9/20</span>
          </Card.Meta>
          <Card.Description>Budget version 1</Card.Description>
        </Card.Content>
        <Button primary>View</Button>
      </Card>
    </>
  );
};

export default BudgetCard;
