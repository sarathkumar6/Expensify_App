/**
 * Task: Create a Visibility Toggle
 * 1) Create a <h1>Visibility Toggle</h1>
 * 2) Create a <button>{visibleText}</button>
 * 3) Create <p id="visible-info"></p>
 */

/**const getElement = document.getElementById("app");
let isToggleVisible = false;
const visibilityButtonHandler = () => {
  let visbileInfoElement = document.getElementById('visible-info');
  isToggleVisible = !isToggleVisible;
    visbileInfoElement.innerHTML = isToggleVisible ? 
    'Hey there, Some information is visible for you to see now!!!' :
    '';
  renderVisbilityApp();
}

const renderVisbilityApp = () => {
    const visibilityTemplate = (
     <div>
      <h1>Visibility Toggle</h1><br></br>
      <button onClick={visibilityButtonHandler}>{isToggleVisible ? 'Hide details' : 'Show details'}</button>
      <p id="visible-info"></p>
     </div>
   );
   ReactDOM.render(visibilityTemplate, getElement)
  }
  renderVisbilityApp();*/

/**
 * Convert Visibility App to React Component
 * render, constructor, handleToggleVisibility
 * state = { visibility: true/false
 */

class Visibility extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visibility: false
    };
    this.onVisibilityButtonClickHandler = this.onVisibilityButtonClickHandler.bind(
      this
    );
  }

  onVisibilityButtonClickHandler() {
    this.setState((prevState) => {
      return {
        visibility: !prevState.visibility
      };
    });
  }

  render() {
    return (
      <div>
        <h1>Visibility Toggle</h1>
        <br></br>
        <button onClick={this.onVisibilityButtonClickHandler}>
          {this.state.visibility ? "Hide details" : "Show details"}
        </button>
        <p id="visible-info">
          {this.state.visibility
            ? "Hey there, Some information is visible for you to see now!!!"
            : ""}
        </p>
      </div>
    );
  }
}

ReactDOM.render(<Visibility />, document.getElementById("app"));
