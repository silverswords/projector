// use Store
import React, { useEffect, useState } from 'react';

// template 
function useJSONState(getdata,setdata,key, defaultValue) {
  const [state, setState] = useState(() =>JSON.parse(getdata())|| defaultValue);

  useEffect(() => {
    setdata(key, JSON.stringify(state));
  }, [key, state]);
  return [state, setState];
}


// ----------------------------------------------------------------
// use Local Store
function useLocalJSONState(key, defaultValue) {
    const [state, setState] = React.useState(
      () => JSON.parse(localStorage.getItem(key)) || defaultValue
    );
    useEffect(() => {
      localStorage.setItem(key, JSON.stringify(state));
    }, [key, state]);
    return [state, setState];
}

// ----------------------------------------------------------------
// use Context be whole store
// https://reactjs.org/docs/hooks-reference.html#usecontext