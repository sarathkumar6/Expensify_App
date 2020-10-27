import React from "react";
// Stateless functional component
const Option = props => {
  const { item, count } = props;
  return ( <div className="option">

    <p className="option__item">{ count }. { item }</p>
    <button className="button button--link" onClick={ e => {
      props.onRemoveOption( props.item );
    } }>
      Remove
      </button>
  </div> );
};

export default Option;