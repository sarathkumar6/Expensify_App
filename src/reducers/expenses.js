import _ from 'lodash';

export default (state = [], action) => {
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