import React from 'react';
class AddOption extends React.Component {
  state = {
    error: undefined
  };
  
  onAddOptionHandler = ( event ) => {
    event.preventDefault();
    const option = event.target.elements.option.value;
    const error = this.props.onAddOptionClick( option );
    this.setState( () => ( { error } ) );
    if ( !error ) {
      event.target.elements.option.value = '';
    }
  }
  render() {
    return ( <div>
      { this.state.error && <p className="add-option-error">{ this.state.error }</p> }
      <form className="add-option" onSubmit={ this.onAddOptionHandler }>
        <input name="option" id="" className="add-option__input" type="text" />
      
        <button className="button">Add Option</button>
      </form>
    </div> );
  }
}

export default AddOption;