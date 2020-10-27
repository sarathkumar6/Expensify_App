import React from "react";
import Option from "./Option";
// Stateless functional component
const Options = props => (
  <div>
  <div className="widget-header">
  <h3 className="widget-header__title">Your Options</h3>
  <button className="button button--link" onClick={props.onRemoveAllOptions}>Remove All</button>
  </div>
    {props.options.length === 0 && <p className="widget__message">Please add an option to get started!</p>}
  {props.options.map((option, index) => (
    <Option
      key={option}
      item={option}
      count={index + 1}
      onRemoveOption={props.onRemoveOption}>
    </Option>
  ))}

  </div>
);

export default Options;
