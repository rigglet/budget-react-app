import React from "react";
import { Divider } from "semantic-ui-react";
import { FcBullish } from "react-icons/fc";
import InForm from "../components/inForm";
import SalaryBreakdown from "../components/SalaryBreakdown";

const Income = ({ incomeData, onChange }) => {
  //const { incomeData } = props;

  return (
    <>
      <div className="container">
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
        <InForm incomeData={incomeData} onChange={onChange} />
        <SalaryBreakdown incomeData={incomeData} />
      </div>
    </>
  );
};

export default Income;
