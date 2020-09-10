import React from "react";
import { Container, Divider } from "semantic-ui-react";
import { FcBullish } from "react-icons/fc";
import InForm from "../components/inForm";

const Income = () => {
  // const incomeData = {
  //   data: [
  //     { annual: 63000.0 },
  //     { allowance: 12509.0 },
  //     { taxable: 50491.0 },
  //     { tax: 12698.2 },
  //     { ni: 5120.0 },
  //     { contributions: 17818.2 },
  //   ],
  // };

  const incomeData = {
    annual: "63000.00",
    allowance: "12509.00",
    taxable: "50491.00",
    tax: "12698.20",
    ni: "5120.00",
    contributions: "17818.20",
  };
  return (
    <>
      <Container className="income-container">
        <FcBullish className="form-icons" />
        <h3 className="container-header">Income</h3>
        <Divider horizontal>Visit HMRC to calculate tax</Divider>
        <a
          href="https://www.gov.uk/estimate-income-tax"
          target="_blank"
          rel="noopener noreferrer"
        >
          HMRC tax calculator
        </a>
        <Divider horizontal>Then complete the fields below</Divider>
        <InForm incomeData={incomeData} />
      </Container>
    </>
  );
};

export default Income;
