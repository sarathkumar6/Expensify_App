
import expensesReducer from '../reducers/expenses';
import filtersReducer from '../reducers/filters';
import { createStore, combineReducers } from "redux";

// Create expense store
// combineReducers allows you to combine multiple reducers into a store

  /**
  const unsubscribe = expenseStore.subscribe(() => {
    const state = expenseStore.getState();
    const visibleExpenses = getVisibileExpenses(state.expenses, state.filters);
    console.log("Expenses: ", visibleExpenses);
  });*/

  export default () => {
    const store = createStore(
        combineReducers({
          expenses: expensesReducer,
          filters: filtersReducer
        }),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
      );

      return store;
  }