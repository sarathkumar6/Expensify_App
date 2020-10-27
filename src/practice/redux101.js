console.log('Hello, I am Redux');

import { createStore } from 'redux';

/**
 * Action Generators
 */
const incrementCount = ({incrementBy = 1} = {}) => ({ type: 'INCREMENT', incrementBy });
const decrementCount = ({decrementBy = 1} = {}) => ({ type: 'DECREMENT', decrementBy });
const multiplyCount = ({multiplyBy = 1} = {}) => ({ type: 'MULTIPLY', multiplyBy });
const setCount = ({setTo = 1} = {}) => ({ type: 'SET', setTo });

/**
 * Tasks
 *  Create 3 actions
 *      - INCREMENT
 *      - DECREMENT
 *      - MULTIPLY
 */

 /**
  * Reducers
  *     1) Pure functions - output depends on the input, no external interference
  *     2) Never change state or action (stay Immutable)
  */
const countReducer = () => {
    (state = { count: 0 }, action) => {
        switch(action.type) {
            case 'INCREMENT':
                const incrementBy = action.incrementBy > 0 ? action.incrementBy : 1;
                return {
                    count: state.count + incrementBy
                }
            case 'DECREMENT':
                const decrementBy = action.decrementBy > 0 && state.count >= action.decrementBy ?
                    action.decrementBy : 1;
                return {
                    count: state.count > 0 ? state.count - decrementBy : state.count
                }
            case 'MULTIPLY': 
                const multiplyBy = action.multiplyBy > 0 ?
                    action.multiplyBy : 1;
                return {
                    count: state.count > 0 ? state.count * multiplyBy : state.count
                }
            case 'SET':
                return {
                    count: action.setTo > 0? action.setTo: state.count
                }
            case 'RESET': 
                return {
                    count: state.count > 0 ? 0 : state.count
                }
            default:
                return state;
        }
    }
}
const sampleStore = createStore(countReducer);

const unsubscribe = sampleStore.subscribe(() => console.log('Change noticed: ',sampleStore.getState()));
sampleStore.dispatch(incrementCount({ incrementBy: 5 }));

sampleStore.dispatch(multiplyCount({ multiplyBy: 3 }));

sampleStore.dispatch(decrementCount({ decrementBy: 2 }));

sampleStore.dispatch(multiplyCount({ multiplyBy: 4 }));

sampleStore.dispatch(decrementCount({ decrementBy: 4 }));

sampleStore.dispatch(setCount({ setTo: 999 }));

sampleStore.dispatch({ type: 'RESET'});

unsubscribe();
