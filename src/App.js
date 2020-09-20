import "semantic-ui-css/semantic.min.css";
import React, { useState } from "react";
import "./App.css";
import Income from "./containers/income";
import Budget from "./containers/budget";
import Summary from "./containers/summary";
import Outgoings from "./containers/outgoings";
import Overview from "./containers/overview";
import Home from "./containers/home";
import Nav from "./components/nav";
import Menu from "./components/menu";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const [incomeData, changeIncome] = useState({
    annual: "63000.00",
    allowance: "12509.00",
    taxable: "50491.00",
    tax: "12698.20",
    ni: "5120.00",
    contributions: "21802.08",
    yearlyNet: "41197.92",
    monthlyNet: "3433.16",
    weeklyNet: "792.27",
  });

  const [budgetData, changeBudget] = useState({
    allocated: "1.00",
    remaining: "1.00",
  });

  const handleBudget = (data) => {
    changeBudget({ ...data });
  };

  function handleChange(data) {
    //console.log(data);
    //const newState = { ...incomeData, ...data };
    //let contributions = incomeData.tax + incomeData.ni;
    let yNet = (incomeData.annual - incomeData.contributions).toFixed(2);
    let mNet = (yNet / 12).toFixed(2);
    let wNet = (yNet / 52).toFixed(2);

    changeIncome({
      ...incomeData,
      ...data,
      yearlyNet: yNet,
      monthlyNet: mNet,
      weeklyNet: wNet,
    });
    //console.log(incomeData);
  }

  return (
    <div className="App">
      <Router>
        <Nav />
        <Menu />
        <Switch>
          <Route
            exact
            path="/income"
            render={(routeProps) => (
              <Income
                {...routeProps}
                incomeData={incomeData}
                onChange={handleChange}
              />
            )}
          />
          <Route
            exact
            path="/budget"
            render={(routeProps) => (
              <Budget
                {...routeProps}
                incomeData={incomeData}
                budgetData={budgetData}
                onChange={handleBudget}
              />
            )}
          />
          <Route exact path="/summary" component={Summary} />
          <Route exact path="/outgoings" component={Outgoings} />
          <Route exact path="/overview" component={Overview} />
          <Route exact path="/" component={Home} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
