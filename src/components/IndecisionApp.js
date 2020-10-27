import React from "react";
import Header from "./Header";
import Action from "./Action";
import Options from "./Options";
import AddOption from "./AddOption";
import OptionModal from "./OptionModal"

class IndecisionApp extends React.Component {
  state = {
    //Use the default props from below
    options: [],
    randomOption: "",
    selectedOption: undefined
  };

  onRemoveAllOptions = () => {
    this.setState(() => ({ options: [] }));
  };

  onRemoveOption = optionToRemove => {
    this.setState(prevState => ({
      options: prevState.options.filter(prevOption => optionToRemove !== prevOption)
    }));
  };

  onActionClick = () => {
    this.setState(prevState => {
      return {
        randomOption:
          prevState.options[
            Math.floor(Math.random() * prevState.options.length)
          ],
          selectedOption: prevState.options[
            Math.floor(Math.random() * prevState.options.length)
          ]
      };
    });
  };

  onSelectedOptionClick = () => {
      this.setState(() => ({ selectedOption: undefined }))
  }
  
  // Do not modify the prevState directly on array maipulation
  onAddOptionClick = option => {
    if (!option) {
      return "Enter valid option";
    } else if (this.state.options.includes(option)) {
      return `This option ${option} already exists`;
    } else {
      this.setState(prevState => ({
        options: prevState.options.concat([option])
      }));
    }
  }

  componentDidMount() {
    //Fetch local storage data
    console.log("IndecisionApp is mounted");
    try {
      const json = localStorage.getItem("options");
      const options = JSON.parse(json);
      if (options) {
        this.setState(() => ({ options }));
      }
    } catch (err) {
      console.log(err);
    }
  }

  componentDidUpdate(prevProps, prevState) {
    //Update local storage data
    console.log("IndecisionApp Component did Update");
    //console.log('Prev props', prevProps);
    //console.log('Prev state', prevState);
    if (prevState.options.length !== this.state.options.length) {
      const data = JSON.stringify(this.state.options);
      localStorage.setItem("options", data);
    }
  }

  componentWillUnmount() {
    console.log();
  }
  
  render() {
    // const title = "Indecision App";
    // FIXME: Dumb mistake used the handler as part of this.state instead of this IndecisionApp
    const subTitle = "Put your life in the hands of a computer";
    return (
      <div>
        <Header subtitle={subTitle}></Header>
        <div className="container">
        <Action
          hasOptions={this.state.options.length < 1}
          onActionClick={this.onActionClick}
          randomOption={this.state.randomOption}>
        </Action>
        <div className="widget">
        <Options
          options={this.state.options}
          onRemoveAllOptions={this.onRemoveAllOptions}
          onRemoveOption={this.onRemoveOption}>
        </Options> 
        <AddOption
          options={this.state.options}
          onAddOptionClick={this.onAddOptionClick}>
        </AddOption>
        
        </div>
        </div>
        <OptionModal selectedOption={this.state.selectedOption} onSelectedOptionClick={this.onSelectedOptionClick}></OptionModal>
      </div>
    );
  }
}

// Default props for Indecision App
IndecisionApp.defaultProps = {
  //options: []
};

export default IndecisionApp;
