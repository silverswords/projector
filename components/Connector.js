import { useEffect, useReducer } from "react"
// Design
// Action = Endpoint
// Decorators = Middleware

const Store = {}

const ActionSet = new Set()

export function useStore(key,reducer,initialState){
    const [state, dispatch] = useReducer(reducer, initialState)

    useEffect(() => {
        Store[key] = state
      }, [key, state]);

    return [state,dispatch]
}

// use =====================================
const initialState = {count: 0};

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return {count: state.count + 1};
    case 'decrement':
      return {count: state.count - 1};
    default:
      throw new Error();
  }
}