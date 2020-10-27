import React from "react";
import { connect } from "react-redux";
import { setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate} from "../actions/filters";
import { DateRangePicker } from 'react-dates';

class ExpenseListFilters extends React.Component {
  state = {
    calendarFocused: null
  }
  onDatesChangeHandler = ({ startDate, endDate}) => {
    this.props.dispatch(setStartDate(startDate));
    this.props.dispatch(setEndDate(endDate));
  }
  onFocusChangedhandler = (calendarFocused) => {
    this.setState(() => {
      return {
        calendarFocused
      }
    })
  }
  render() {
    return (
      <div>
        <input
          type="text"
          value={this.props.filters.text}
          onChange={e => {
            this.props.dispatch(setTextFilter(e.target.value));
          }}
        ></input>
        <select
          value={this.props.filters.sortBy}
          onChange={e => {
            if (e.target.value === "amount") {
              this.props.dispatch(sortByAmount());
            } else if (e.target.value === "date") {
              this.props.dispatch(sortByDate());
            }
          }}>
          <option value="date">Date</option>
          <option value="amount">Amount</option>
        </select>
        <DateRangePicker
        startDate={this.props.filters.startDate}
        endDate={this.props.filters.endDate}
        onDatesChange={this.onDatesChangeHandler}
        focusedInput={this.state.calendarFocused}
        onFocusChange={this.onFocusChangedhandler}
        showClearDates={true}
        numberOfMonths={1}
        isOutsideRange={() => false}>
        </DateRangePicker>
      </div>
    );
  }
  
};

const mapStateToProps = state => {
  return {
    filters: state.filters
  };
};

export default connect(mapStateToProps)(ExpenseListFilters);
