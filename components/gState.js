// use Store
import React, { useEffect, useState } from 'react';

var localStorage = require('localStorage')
// ----------------------------------------------------------------
// use Local Store
export function useLocalJSONStore(key, defaultValue) {
    const [state, setState] = useState(
      () => JSON.parse(localStorage.getItem(key)) || defaultValue
    );
    useEffect(() => {
      localStorage.setItem(key, JSON.stringify(state));
    }, [key, state]);
    return [state, setState];
}
