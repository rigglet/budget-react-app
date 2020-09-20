import React from "react";
import { Container, Table, Form, Label, Button } from "semantic-ui-react";
// import { BiReset } from "react-icons/bi";

const InForm = (props) => {
  const {
    annual,
    allowance,
    taxable,
    tax,
    ni,
    contributions,
    yearlyNet,
    monthlyNet,
    weeklyNet,
  } = props.incomeData;

  function handleChange(event) {
    //console.log(props);
    props.onChange({ [event.target.name]: event.target.value });
  }
  return (
    <>
      <Container className="income-container">
        <Form>
          <Form.Group widths="equal">
            <Form.Input
              onChange={handleChange}
              fluid
              label="Annual Salary (Gross)"
              labelPosition="right"
              type="number"
              placeholder="Annual Salary (Gross)"
              defaultValue={annual}
              name="annual"
              step="10"
            >
              <Label>£</Label>
              <input />
            </Form.Input>
            <Form.Input
              onChange={handleChange}
              fluid
              label="Tax Free Allowance"
              labelPosition="right"
              type="number"
              placeholder="Tax Free Allowance"
              defaultValue={allowance}
              name="allowance"
              step="10"
            >
              <Label>£</Label>
              <input />
            </Form.Input>
            <Form.Input
              onChange={handleChange}
              fluid
              label="Taxable Income"
              placeholder="Taxable Income"
              defaultValue={taxable}
              labelPosition="right"
              type="number"
              name="taxable"
              step="10"
            >
              <Label>£</Label>
              <input />
            </Form.Input>
          </Form.Group>
          <Form.Group widths="equal">
            <Form.Input
              onChange={handleChange}
              label="Income Tax"
              placeholder="Income Tax"
              defaultValue={tax}
              fluid
              labelPosition="right"
              type="number"
              name="tax"
              step="10"
            >
              <Label>£</Label>
              <input />
            </Form.Input>
            <Form.Input
              onChange={handleChange}
              fluid
              labelPosition="right"
              type="number"
              label="National Insurance"
              placeholder="National Insurance"
              defaultValue={ni}
              name="ni"
              step="10"
            >
              <Label>£</Label>
              <input />
            </Form.Input>
            <Form.Input
              onChange={handleChange}
              fluid
              labelPosition="right"
              type="number"
              label="Total deductions"
              placeholder="Deductions"
              defaultValue={contributions}
              name="contributions"
              step="10"
            >
              <Label>£</Label>
              <input />
            </Form.Input>
          </Form.Group>
        </Form>

        <Table celled>
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
        <Button>Reset</Button>
      </Container>
    </>
  );
};

export default InForm;
