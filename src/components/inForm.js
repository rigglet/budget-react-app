import React from "react";
import { Form, Label, Button } from "semantic-ui-react";

const InForm = (props) => {
  const {
    annual,
    allowance,
    taxable,
    tax,
    ni,
    contributions,
  } = props.incomeData;

  function handleChange(event) {
    //console.log(props);
    props.onChange({ [event.target.name]: event.target.value });
  }
  return (
    <>
      <div className="container">
        <Form>
          <Form.Group>
            <Form.Input
              width={3}
              required
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
              width={3}
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
              width={3}
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
          <Form.Group>
            <Form.Input
              width={3}
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
              width={3}
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
              width={3}
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

        <Button>Reset</Button>
      </div>
    </>
  );
};

export default InForm;
