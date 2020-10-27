'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// Extend the React.Component
/**
 * Steps in creating a component
 *  1) class className extends React.Component
 *  2) render() {}
 *  3) return the jsx expression
 *  4) Setting up attributes/bindings is same as setting up props in react
 */

/**
 * Component state- when there is change in the state i.e., adding an option to options then the options component should update and re-render
 *  1) Setups default state Object
 *  2) Component rendered with default state values
 *  3) Change state based on event
 *  4) Component re-render using new state values
 *  5) repeat steps 3 and 4
 */
//import Header from '../src/components/Header';
/**
 * Note: props are one-way bound. So, you need a callback binding to do modifications to the state in the parent component
 */
/**
 * Two types of components
 *  1) State-based class components (manages state)
 *  2) Stateless functional components (presentation of UI)
 *      - stateless components do not have this, you pass props and grab attributes from that
 *      - faster than class based component because there is no overhead of extending React.Component
 */

/**
 * Component mounting -> life cycle $onInit in AngularJS -> component is created and inserted into the DOM
 * constructor() -> componentWillMount() -> render() -> componentDidMount()
 */
// TODO: The stateless functional components don't have life cycle methods
var IndecisionApp = function (_React$Component) {
  _inherits(IndecisionApp, _React$Component);

  function IndecisionApp(props) {
    _classCallCheck(this, IndecisionApp);

    var _this = _possibleConstructorReturn(this, (IndecisionApp.__proto__ || Object.getPrototypeOf(IndecisionApp)).call(this, props));

    _this.onRemoveAllOptions = _this.onRemoveAllOptions.bind(_this);
    _this.onActionClick = _this.onActionClick.bind(_this);
    _this.onAddOptionClick = _this.onAddOptionClick.bind(_this);
    _this.onRemoveOption = _this.onRemoveOption.bind(_this);
    _this.state = {
      //Use the default props from below
      options: [],
      randomOption: ""
    };
    return _this;
  }

  _createClass(IndecisionApp, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      //Fetch local storage data
      console.log('IndecisionApp is mounted');
      try {
        var json = localStorage.getItem('options');
        var options = JSON.parse(json);
        if (options) {
          this.setState(function () {
            return { options: options };
          });
        }
      } catch (err) {
        console.log(err);
      }
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps, prevState) {
      //Update local storage data
      console.log('IndecisionApp Component did Update');
      //console.log('Prev props', prevProps);
      //console.log('Prev state', prevState);
      if (prevState.options.length !== this.state.options.length) {
        var data = JSON.stringify(this.state.options);
        localStorage.setItem('options', data);
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      console.log();
    }
  }, {
    key: 'onRemoveAllOptions',
    value: function onRemoveAllOptions() {
      this.setState(function () {
        return { options: [] };
      });
    }
  }, {
    key: 'onRemoveOption',
    value: function onRemoveOption(optionToRemove) {
      this.setState(function (prevState) {
        return {
          options: prevState.options.filter(function (prevOption) {
            optionToRemove !== prevOption;
          })
        };
      });
    }
  }, {
    key: 'onActionClick',
    value: function onActionClick() {
      this.setState(function (prevState) {
        return {
          randomOption: prevState.options[Math.floor(Math.random() * prevState.options.length)]
        };
      });
    }
    // Do not modify the prevState directly on array maipulation

  }, {
    key: 'onAddOptionClick',
    value: function onAddOptionClick(option) {
      if (!option) {
        return "Enter valid option";
      } else if (this.state.options.includes(option)) {
        return 'This option ' + option + ' already exists';
      } else {
        this.setState(function (prevState) {
          return {
            options: prevState.options.concat([option])
          };
        });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      //const title = "Indecision App";
      var subTitle = "Put your life in the hands of a computer";

      return React.createElement(
        'div',
        null,
        React.createElement(Header, { subtitle: subTitle }),
        React.createElement(Action, {
          hasOptions: this.state.options.length < 1,
          onActionClick: this.onActionClick,
          randomOption: this.state.randomOption
        }),
        React.createElement(Options, {
          options: this.state.options,
          onRemoveAllOptions: this.onRemoveAllOptions,
          onRemoveOption: this.onRemoveOption
        }),
        React.createElement(AddOption, {
          options: this.state.options,
          onAddOptionClick: this.onAddOptionClick
        })
      );
    }
  }]);

  return IndecisionApp;
}(React.Component);
// Default props for Indecision App


IndecisionApp.defaultProps = {
  //options: []
};
var Header = function Header(props) {
  var title = props.title,
      subtitle = props.subtitle;

  return React.createElement(
    'div',
    null,
    React.createElement(
      'h1',
      null,
      title
    ),
    props.subtitle && React.createElement(
      'h2',
      null,
      subtitle
    )
  );
};
// Default props for Header
Header.defaultProps = {
  title: "Indecision"
};

// Stateless functional component
var Action = function Action(props) {
  return React.createElement(
    'div',
    null,
    React.createElement(
      'button',
      { disabled: props.hasOptions, onClick: props.onActionClick },
      'What should I do'
    ),
    React.createElement(
      'p',
      null,
      props.randomOption
    )
  );
};

// Stateless functional component
var Options = function Options(props) {
  return React.createElement(
    'div',
    null,
    React.createElement(
      'ol',
      null,
      props.options.map(function (option) {
        return React.createElement(Option, {
          key: option,
          item: option,
          onRemoveOption: props.onRemoveOption
        });
      })
    ),
    React.createElement(
      'button',
      { onClick: props.onRemoveAllOptions },
      'Remove All'
    ),
    props.options.length === 0 && React.createElement(
      'p',
      null,
      'Please add an option'
    ),
    React.createElement('br', null),
    React.createElement('br', null)
  );
};

// Stateless functional component
var Option = function Option(props) {
  var item = props.item;

  return React.createElement(
    'div',
    null,
    React.createElement(
      'li',
      null,
      item
    ),
    React.createElement(
      'button',
      { onClick: function onClick(e) {
          props.onRemoveOption(props.item);
        } },
      'Remove'
    )
  );
};

var AddOption = function (_React$Component2) {
  _inherits(AddOption, _React$Component2);

  function AddOption(props) {
    _classCallCheck(this, AddOption);

    var _this2 = _possibleConstructorReturn(this, (AddOption.__proto__ || Object.getPrototypeOf(AddOption)).call(this, props));

    _this2.onAddOptionHandler = _this2.onAddOptionHandler.bind(_this2);
    _this2.state = {
      error: undefined
    };
    return _this2;
  }

  _createClass(AddOption, [{
    key: 'onAddOptionHandler',
    value: function onAddOptionHandler(event) {
      event.preventDefault();
      var option = event.target.elements.option.value;
      var error = this.props.onAddOptionClick(option);

      this.setState(function () {
        return { error: error };
      });

      if (!error) {
        event.target.elements.option.value = '';
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        this.state.error && React.createElement(
          'p',
          null,
          this.state.error
        ),
        React.createElement(
          'form',
          { onSubmit: this.onAddOptionHandler },
          React.createElement('input', { name: 'option', id: '', className: 'btn btn-primary', type: 'text' }),
          React.createElement('br', null),
          React.createElement('br', null),
          React.createElement(
            'button',
            { className: 'btn' },
            'Add Option'
          )
        )
      );
    }
  }]);

  return AddOption;
}(React.Component);

// Takes jsx that we want to render and the element on the DOM


ReactDOM.render(React.createElement(IndecisionApp, null), document.getElementById("app"));
