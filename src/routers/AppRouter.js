import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { ExpenseDashboardPage } from "../componentsExpensify/ExpenseDashboardPage";
import AddExpensePage from "../componentsExpensify/AddExpensePage";
import { Header } from "../componentsExpensify/Header";
import { HelpExpensePage } from "../componentsExpensify/HelpExpensePage";
import EditExpensePage from "../componentsExpensify/EditExpensePage";
import { UnkownPage } from "../componentsExpensify/UnkownPage";

const AppRouter = () => (
    <BrowserRouter>
    <Header />
    <Switch>
      <Route path="/" component={ExpenseDashboardPage} exact={true}></Route>
      <Route path="/addExpense" component={AddExpensePage}></Route>
      <Route path="/editExpense/:id" component={EditExpensePage}></Route>
      <Route path="/helpExpense" component={HelpExpensePage}></Route>
      <Route component={UnkownPage}></Route>
    </Switch>
  </BrowserRouter>
);

export default AppRouter;