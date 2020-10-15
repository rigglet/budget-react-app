import React from "react";
import { Card, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { FcEmptyTrash } from "react-icons/fc";

const BudgetCard = (props) => {
  const { budget } = props;

  function viewBudget() {}

  return (
    <>
      <Card>
        <Card.Content>
          <Card.Header>{budget.saveName}</Card.Header>
          <Card.Meta>
            <span className="date">Saved {budget.saveDate}</span>
          </Card.Meta>
          <Card.Description>{budget.description}</Card.Description>
        </Card.Content>
        <Link to="/income">
          <Button primary onClick={viewBudget}>
            View
          </Button>
        </Link>
        <a href="no_ref">
          <FcEmptyTrash className="form-icons" />
        </a>
      </Card>
    </>
  );
};

export default BudgetCard;
