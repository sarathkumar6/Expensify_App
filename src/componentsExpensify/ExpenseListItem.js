import React from "react";
import { Link } from 'react-router-dom';

const ExpenseListItem = ({ id, description, amount, createdAt }) => {
  return (
    <div>
    <Link to={`/editExpense/${id}`}> 
      <h3>{description}</h3>
    </Link> 
    <p>
        {amount} - {createdAt}
      </p>
     
    </div>
  );
};

export default ExpenseListItem;
