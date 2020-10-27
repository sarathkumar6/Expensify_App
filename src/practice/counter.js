/**
let count = 0;
const plusOne = () => {
    count++;
    renderAppCount();
};
const minusOne = () => {
    count = count > 0 ? count -1 : count;
    renderAppCount();
};
const reset = () => {
    count = 0;
    renderAppCount();
};

const renderAppCount = () => {
    const templateThree = (
        <div>
          <h1>Count: {count}</h1>
          <button id="plus-one" className="" onClick={plusOne}> +1 </button><br></br><br></br>
          <button id="minusOne" className="" onClick={minusOne}> -1 </button><br></br><br></br>
          <button id="reset" className="" onClick={reset}>Reset</button>
        </div>
      );
    ReactDOM.render(templateThree, getElement);
}
renderAppCount();*/

/**
 * Do explicit binding to the handlers to preserve this because the context will be lost and have no reference to the props
 * Use this.setState to update the state and re-render the component
 */
class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.increaseCountHandler = this.increaseCountHandler.bind(this);
        this.decreaseCountHandler = this.decreaseCountHandler.bind(this);
        this.resetCountHandler = this.resetCountHandler.bind(this);
        this.state = {
            count: 0,
            disableDecrease: this.count < 1
        }
    }

    componentDidMount() {
        const num = parseInt(localStorage.getItem('count'), 10);
        if (typeof num === 'number') {
            this.setState(() => ({ count: num }));
        }
    }

    componentDidUpdate(prevPros, prevState) {
        if (prevState.count !== this.state.count) {
            localStorage.setItem('count', this.state.count)
        }
    }
    /**
     * TODO: Check this out on using this.setState() 
     * https://reactjs.org/docs/state-and-lifecycle.html 
     */
    increaseCountHandler() {
        this.setState((prevState) => {
            return {
                count: prevState.count + 1
            }
        });
    }
    
    decreaseCountHandler() {
        this.setState((prevState) => {
            return {
                count: prevState.count > 0 ? prevState.count -1 : prevState.count
            }
        });
    }

    resetCountHandler() {
        this.setState(() => {
            return {
                count: 0
            }
        })
    }

    isDisabledHandler() {

    }

    render() {
        return (
            <div>
                <h1>Count: {this.state.count}</h1>
                <button id="plust-one" onClick={this.increaseCountHandler}>+1</button>
                <button disabled={this.state.count < 1} id="minus-one" onClick={this.decreaseCountHandler}>-1</button>
                <button disabled={this.state.count < 1}id="reset" onClick={this.resetCountHandler}>Reset</button>
            </div>
        );
    }
}
/** Default props for Counter App
Counter.defaultprops = {
    count: 0
}*/
/**
 * 1) Create three methods i.e., increaseCountHandler, decreaseCountHandler, resetCountHandler
 * 2) Use console.log('increaseCountHandler'), console.log('decreaseCountHandler'), console.log('resetCountHandler');
 * 3) Explicitly bind the handlers to preserve 'this' and add the handlers to onClick of the buttons
 */
ReactDOM.render(<Counter />, document.getElementById('app'))
