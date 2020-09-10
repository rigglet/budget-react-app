import "semantic-ui-css/semantic.min.css";
import React from "react";
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
  return (
    <div className="App">
      {/* <Router>
        <Grid>
          <Grid.Row columns={12}>
            <Grid.Column>
              <Nav />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column width={3}>
              <Menu />
            </Grid.Column>
            <Grid.Column width={9} textAlign="center">
              <Switch>
                <Route exact path="/income" component={Income} />
                <Route exact path="/budget" component={Budget} />
                <Route exact path="/summary" component={Summary} />
                <Route exact path="/outgoings" component={Outgoings} />
                <Route exact path="/overview" component={Overview} />
                <Route exact path="/home" component={Home} />
              </Switch>
            </Grid.Column>
            <Grid.Column width={4}></Grid.Column>
          </Grid.Row>
        </Grid>
      </Router> */}
      <Router>
        <Nav />
        <Menu />
        <Switch>
          <Route exact path="/income" component={Income} />
          <Route exact path="/budget" component={Budget} />
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
