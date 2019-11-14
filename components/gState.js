// use Store
import React, { useEffect, useState } from 'react';

// template 
function useStore(getdata,setdata, defaultValue) {
  const [state, setState] = useState(() => getdata()|| defaultValue);

  useEffect(() => {
    setdata();
  });
  return [state, setState];
}


// ----------------------------------------------------------------
// use Local Store
function useLocalJSONStore(key, defaultValue) {
    const [state, setState] = useState(
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
const StoreContext = React.createContext();

const StoreProvider = ({children,store}) => (
<StoreContext.Provider store={store}>{children}</StoreContext.Provider>
);

const store = useContext(StoreContext);