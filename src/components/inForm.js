import React, { useState } from "react";
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
  } = props.incomeData;
  //console.log(allowance);

  const [annualSalary, setASalary] = useState(annual);
  const [taxAllowance, setAllowance] = useState(allowance);
  const [taxableAmount, setTaxable] = useState(taxable);
  const [taxAmount, setTaxAmount] = useState(tax);
  const [niAmount, setNI] = useState(ni);
  const [totalTax, setTotalTax] = useState(contributions);

  function resetFigures() {
    setASalary(annual);
  }

  return (
    <>
      <Container className="income-container">
        <Form>
          <Form.Group widths="equal">
            <Form.Input
              onChange={() => setASalary(annualSalary)}
              fluid
              label="Annual Salary (Gross)"
              labelPosition="right"
              type="number"
              placeholder="Annual Salary (Gross)"
              defaultValue={annualSalary}
            >
              <Label>£</Label>
              <input />
            </Form.Input>
            <Form.Input
              onChange={() => setAllowance(taxAllowance)}
              fluid
              label="Tax Free Allowance"
              labelPosition="right"
              type="number"
              placeholder="Tax Free Allowance"
              defaultValue={allowance}
            >
              <Label>£</Label>
              <input />
            </Form.Input>
            <Form.Input
              onChange={() => setTaxable(taxableAmount)}
              fluid
              label="Taxable Income"
              placeholder="Taxable Income"
              defaultValue={taxable}
              labelPosition="right"
              type="number"
            >
              <Label>£</Label>
              <input />
            </Form.Input>
          </Form.Group>
          <Form.Group widths="equal">
            <Form.Input
              onChange={() => setTaxAmount(taxAmount)}
              label="Income Tax"
              placeholder="Income Tax"
              defaultValue={tax}
              fluid
              labelPosition="right"
              type="number"
            >
              <Label>£</Label>
              <input />
            </Form.Input>
            <Form.Input
              onChange={() => setNI(niAmount)}
              fluid
              labelPosition="right"
              type="number"
              label="National Insurance"
              placeholder="National Insurance"
              defaultValue={ni}
            >
              <Label>£</Label>
              <input />
            </Form.Input>
            <Form.Input
              onChange={() => setTotalTax(totalTax)}
              fluid
              labelPosition="right"
              type="number"
              label="Total"
              placeholder="Total"
              defaultValue={contributions}
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
                <span className="figures">£41197.92</span>
              </Table.Cell>
              <Table.Cell>
                <span className="figures">£3433.16</span>
              </Table.Cell>
              <Table.Cell>
                <span className="figures">£792.27</span>
              </Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
        <Button onClick={() => resetFigures()}>
          Reset
          {/* <BiReset className="form-icons" /> */}
        </Button>
      </Container>
    </>
  );
};

export default InForm;
