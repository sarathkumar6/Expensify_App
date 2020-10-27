import React from "react";
import { connect } from "react-redux";
import ExpenseListItem from "./ExpenseListItem";
import selectExpenses from "../selectors/expenses";
import ExpenseListFilters from "./ExpenseListFilters";
import _ from "lodash";

const ExpenseList = props => {
  return (
    <div>
      <ExpenseListFilters></ExpenseListFilters>
      <h3>Expense List</h3>
      {_.map(props.expenses, expense => {
        return (
          <ExpenseListItem key={expense.id} {...expense}></ExpenseListItem>
        );
      })}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    expenses: selectExpenses(state.expenses, state.filters)
  };
};

export default connect(mapStateToProps)(ExpenseList);
