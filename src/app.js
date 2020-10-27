import React from "react";
import ReactDOM from "react-dom";
import AppRouter from "./routers/AppRouter";
import configStore from "./store/configStore";
import { addExpense } from "./actions/expenses";
import { setTextFilter } from "./actions/filters";
import showExpenses from "./selectors/expenses";
import { Provider, Connect } from "react-redux";
import "normalize.css/normalize.css";
import "./styles/styles.scss";

const store = configStore();
console.log(store);
const unsubsrcibe = store.subscribe(() => {
  const state = store.getState();
  const visibleExpenses = showExpenses(state.expenses, state.filters);
  console.log("Expenses: ", visibleExpenses);
});

store.dispatch(
  addExpense({
    description: "Water bill",
    note: "September 2020",
    amount: 40.3,
    createdAt: 100
  })
);

store.dispatch(
  addExpense({
    description: "Gas bill",
    note: "September 2020",
    amount: 45.3,
    createdAt: 4030
  })
);

//store.dispatch(setTextFilter("water"));

store.dispatch(
  addExpense({
    description: "Internet bill",
    note: "September 2020",
    amount: 99,
    createdAt: 7001
  })
);
store.dispatch(setTextFilter("bill"));

store.dispatch(
  addExpense({
    description: "Laundry bill",
    note: "September 2020",
    amount: 130,
    createdAt: 700
  })
);

unsubsrcibe();

const jsx = (
  <Provider store={store}>
    <AppRouter></AppRouter>
  </Provider>
);
// Takes jsx that we want to render and the element on the DOM
ReactDOM.render(jsx, document.getElementById("app"));
