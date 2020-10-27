
/**
 *  SET_TEXT_FILTER
 */
export const setTextFilter = (text) => {
    return {
      type: "SET_TEXT_FILTER",
      text
    };
  };
  
  /**
   * SORT_BY_AMOUNT
   */
  
export const sortByAmount = () => {
    return {
      type: "SORT_BY_AMOUNT",
      sortBy: "amount"
    };
  };
  
  /**
   * SORT_BY_DATE
   */
  
export  const sortByDate = () => {
    return {
      type: "SORT_BY_DATE",
      sortBy: "date"
    };
  };
  
  /**
   * SET_START_DATE
   */
  
export  const setStartDate = (date) => {
    return {
      type: "SET_START_DATE",
      date
    };
  };
  
  /**
   * SET_START_DATE
   */
  
export const setEndDate = (date) => {
    return {
      type: "SET_END_DATE",
      date
    };
  };
  