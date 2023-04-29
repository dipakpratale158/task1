import { createStore } from "redux";

// Initial state of the counter
const initialState = { counter: 0 };

// Action types
const INCREMENT = "increment";
const DECREMENT = "decrement";

// Action creators
const incrementAction = { type: INCREMENT };
const decrementAction = { type: DECREMENT };

// Reducer function
const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return { counter: state.counter + 1 };
    case DECREMENT:
      return { counter: state.counter - 1 };
    default:
      return state;
  }
};

// Redux store
const store = createStore(counterReducer);

// Dispatching the increment action 5 times
for (let i = 0; i < 5; i++) {
  store.dispatch(incrementAction);
}

// Dispatching the decrement action
store.dispatch(decrementAction);

// Logging the current value of the counter
console.log(store.getState().counter);

export default store;
