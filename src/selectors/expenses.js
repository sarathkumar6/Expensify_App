import _ from 'lodash';
import moment from 'moment';

export default (expenses, { text, sortBy, startDate, endDate }) => {
    return _.filter(expenses, (expense) => {
        // FIXME: Add this check typeof startDate !== 'number'
        //const startDateMatch = typeof startDate !== 'number' || expense.createdAt >=  startDate;
        //const endDateMatch = typeof endDate !== 'number' || expense.createdAt >=  startDate;
        // TODO: Check out moment.js
        // FIXME: Filters don't seem to work properly
        const createdAtMoment = moment(expense.createdAt);
        const startDateMatch = _.get(startDate, 'isSameorBefore') ? startDate.isSameorBefore(createdAtMoment, 'day') : true;
        const endDateMatch = _.get(endDateMatch, 'isSameorAfter') ? endDate.isSameorAfter(createdAtMoment, 'day') : true;
        const textMatch = _.includes(expense.description.toLowerCase(), text.toLowerCase());
        
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