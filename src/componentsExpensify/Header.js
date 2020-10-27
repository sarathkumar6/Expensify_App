import React from "react";
import { NavLink } from "react-router-dom";
export const Header = () => ( <header>
    <h1>Expensify</h1>
    <NavLink activeClassName="is-active" to="/" exact={ true }>Dashboard</NavLink><br></br>
    <NavLink activeClassName="is-active" to="/addExpense">Add Expense</NavLink><br></br>
    <NavLink activeClassName="is-active" to="/helpExpense">Help Expense</NavLink>
</header> );
