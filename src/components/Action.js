import React from "react";
// Stateless functional component
const Action = props => (
  //FIXME: Add margin-bottom to this action section and address mobile version styling
  <div>
    <button className="large-button" disabled={props.hasOptions} onClick={props.onActionClick}>
      What should I do?
    </button>
  </div>
);

export default Action;
