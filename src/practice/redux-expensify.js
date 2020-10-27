console.log("Hello, I am Expensify Redux Store");
import { createStore, combineReducers } from "redux";
import uuid from "uuid";
import _ from "lodash";
/**
 * Action Generators
 */

/**
 *  ADD_EXPENSE
 */
const addExpense = ({
  description = "",
  note = "",
  amount = 0,
  createdAt = 0
} = {}) => {
  return {
    type: "ADD_EXPENSE",
    expense: {
      id: uuid(),
      description,
      note,
      amount,
      createdAt
    }
  };
};

/**
 * REMOVE_EXPENSE
 */
const removeExpense = ({ id } = {}) => {
  return {
    type: "REMOVE_EXPENSE",
    id
  };
};

/**
 * EDIT_EXPENSE
 */
const editExpense = (id, updates) => {
  return {
    type: "EDIT_EXPENSE",
    id,
    updates
  };
};

/**
 *  SET_TEXT_FILTER
 */
const setTextFilter = text => {
  return {
    type: "SET_TEXT_FILTER",
    text
  };
};

/**
 * SORT_BY_AMOUNT
 */

const sortByAmount = () => {
  return {
    type: "SORT_BY_AMOUNT",
    sortBy: "amount"
  };
};

/**
 * SORT_BY_DATE
 */

const sortByDate = () => {
  return {
    type: "SORT_BY_DATE",
    sortBy: "date"
  };
};

/**
 * SET_START_DATE
 */

const setStartDate = date => {
  return {
    type: "SET_START_DATE",
    date
  };
};

/**
 * SET_START_DATE
 */

const setEndDate = date => {
  return {
    type: "SET_END_DATE",
    date
  };
};

/**
 * Reducers
 *     1) expensesReducer
 *     2) filterExpenses
 */
const demoState = {
  expenses: [
    {
      id: "101",
      description: "Chipotle purchase",
      note: "Lunch burrito bowl",
      amount: 10.2,
      createdAt: 0
    }
  ],
  filters: {
    text: "rent",
    sortBy: "amount", //date or amount
    startDate: undefined,
    endDate: undefined
  }
};

const expensesReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_EXPENSE":
      // Spread state elements
      return [...state, action.expense];
    case "REMOVE_EXPENSE":
      return _.filter(state, expense => expense.id !== action.id);
    case "EDIT_EXPENSE":
      return _.map(state, expense => {
        if (expense.id === action.id) {
          return {
            ...expense,
            ...action.updates
          };
        } else {
          return expense;
        }
      });
    default:
      return state;
  }
};

const filtersDefaultState = {
  text: "",
  sortBy: "date",
  startDate: undefined,
  endDate: undefined
};

const filtersReducer = (state = filtersDefaultState, action) => {
  switch (action.type) {
    case "SET_TEXT_FILTER":
      return {
        ...state,
        ...{ text: action.text }
      };
    case "SORT_BY_AMOUNT":
      return {
        ...state,
        sortBy: action.sortBy
      };
    case "SORT_BY_DATE":
      return {
        ...state,
        sortBy: action.sortBy
      };
    case "SET_START_DATE":
      return {
        ...state,
        startDate: action.date
      };
    case "SET_END_DATE":
      return {
        ...state,
        endDate: action.date
      };
    default:
      return state;
  }
};

// Get visible expenses

const getVisibileExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
  return _.filter(expenses, (expense) => {
      // FIXME: Add this check typeof startDate !== 'number'
      const startDateMatch = typeof startDate !== 'number' || expense.createdAt >=  startDate;
      const endDateMatch = typeof endDate !== 'number' || expense.createdAt >=  startDate;
      const textMatch = _.includes(expense.description.toLowerCase().split(' '), text.toLowerCase());
      
      return startDateMatch && endDateMatch && textMatch;
  })
  .sort((a, b) => {
    if (sortBy === 'date') {
        return a.createdAt < b.createdAt ? 1 : -1;
    } else if (sortBy === 'amount') {
        return a.amount < b.amount ? 1 : -1;
    }
  })
};

// Create expense store
// combineReducers allows you to combine multiple reducers into a store
const expenseStore = createStore(
  combineReducers({
    expenses: expensesReducer,
    filters: filtersReducer
  })
);

const unsubscribe = expenseStore.subscribe(() => {
  const state = expenseStore.getState();
  const visibleExpenses = getVisibileExpenses(state.expenses, state.filters);
  console.log("Expenses: ", visibleExpenses);
});

const expenseTwo = expenseStore.dispatch(
    addExpense({
      description: "Panera Holt Rd",
      note: "Buy 2 - Napa Almond Salad and Turkey Chilli",
      amount: 12.7,
      createdAt: -1131
    })
  );

const expenseOne = expenseStore.dispatch(
  addExpense({
    description: "Chipotle Ridge Rd",
    note: "Lunch - Burrito Bowl",
    amount: 10.13,
    createdAt: 6000
  })
);

const expenseOneId = _.get(expenseOne, "expense.id");
const expenseTwoId = _.get(expenseTwo, "expense.id");

expenseStore.dispatch(
  addExpense({
    description: "Monte Alban Emp Blvd",
    note: "Chicken Soup",
    amount: 7.7,
    createdAt: 2000
  })
);
//expenseStore.dispatch(removeExpense({ id: expenseOneId }));
//expenseStore.dispatch(editExpense(expenseTwoId, { amount: 14.99 }));

//expenseStore.dispatch(setTextFilter("Monte"));
expenseStore.dispatch(sortByAmount());
//expenseStore.dispatch(sortByDate());
//expenseStore.dispatch(setStartDate(100));
//expenseStore.dispatch(setEndDate(1999));
//expenseStore.dispatch(setTextFilter("Ridge"));
//expenseStore.dispatch(setStartDate());
//expenseStore.dispatch(setEndDate());

unsubscribe();
