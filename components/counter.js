import {useStore} from './useStore'

export function Counter({key,initialCount}) {
    // const [count, setCount] = useLocalJSONStore(key, initialCount);
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