// use Store
import React, { useEffect, useState } from 'react';

var localStorage = require('localStorage')
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

function Chain(outer, ...others) {
  return (next) => {
    for (i=others.length-1 ;i >=0;i--){
      next = others[i](next);
    }
    return outer(next)
  }
}

function getJSONFromLocalStorage(key) {
  JSON.parse(localStorage.getItem(key))
}

function setJSONFromLocalStorage(key,data) {
  localStorage.setItem(key, JSON.stringify(data))
}