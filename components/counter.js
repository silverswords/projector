import {useStore} from './useStore'

export function Counter({keyname,initialCount}) {
    // const [count, setCount] = useLocalJSONStore(keyname, initialCount);
    const [state, dispatch] = useStore(keyname,initialCount)
    return (
      <>
        Count: {state}
        <button onClick={() => dispatch(keyname,initialCount)}>Reset</button>
        <button onClick={() => dispatch(keyname,state-1)}>-</button>
        <button onClick={() => dispatch(keyname,state+1)}>+</button>
      </>
    );
  }

  // stage 2 for action
export function Counter1({keyname,initialCount}) {
    // const [count, setCount] = useLocalJSONStore(keyname, initialCount);
    function reducer(state, action) {
      switch (action.type) {
        case 'increment':
          return {count: state.count + 1};
        case 'decrement':
          return {count: state.count - 1};
        case 'initialCount':
          return {count: 0};
        default:
          throw new Error();
      }
    }
  
    const [state, dispatch] = useStore('count',reducer,0)
    return (
      <>
        Count: {state.count}
        <button onClick={() => dispatch({type: 'initialCount'})}>Reset</button>
        <button onClick={() => dispatch({type: 'decrement'})}>-</button>
        <button onClick={() => dispatch({type: 'increment'})}>+</button>
      </>
    );
  }

  // stage 3 for decorator