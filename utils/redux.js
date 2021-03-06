const { createStore } = Redux
/**
 * This is a reducer, a pure function with (state, action) => state signature.
 * It describes how an action transforms the state into the next state.
 *
 * The shape of the state is up to you: it can be a primitive, an array, an object,
 * or even an Immutable.js data structure. The only important part is that you should
 * not mutate the state object, but return a new object if the state changes.
 *
 * In this example, we use a `switch` statement and strings, but you can use a helper that
 * follows a different convention (such as function maps) if it makes sense for your
 * project.
 */

const initialState = {
    type: 'NEW_GAME',  
    wins : parseInt(localStorage.getItem('wins')) || 0,
    game : 1
  };

function rps(state = initialState, action) {
  switch (action.type) {
    case 'NEW_GAME': {
        state = initialState;
        return state
    }   
    case 'START_GAME': {
        state.game = action.payload;
        return state;
    }   
    case 'END_GAME':
        return state 
    case 'WIN_GAME':
        state.wins += 1
        localStorage.setItem('wins', state.wins);
        return state
    case 'LOST_GAME':
        return state
    default:
      return state
  }
}
// Create a Redux store holding the state of your app.
// Its API is { subscribe, dispatch, getState }.
let store = createStore(rps)
// You can use subscribe() to update the UI in response to state changes.
// Normally you'd use a view binding library (e.g. React Redux) rather than subscribe() directly.
// However it can also be handy to persist the current state in the localStorage.
// store.subscribe(() => console.log(store.getState()))
// The only way to mutate the internal state is to dispatch an action.
// The actions can be serialized, logged or stored and later replayed.
// store.dispatch({ type: 'INCREMENT' })
// // 1
// store.dispatch({ type: 'INCREMENT' })
// // 2
// store.dispatch({ type: 'DECREMENT' })
// // 1