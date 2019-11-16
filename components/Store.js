import {useEffect,useState} from 'react'

function useStore(key,init) {

    [state,setState] = useState(StoreOrGlobalObject.get(key))

    
    useEffect(() => {
        queue.push(setState)

        return queue.delete
    })

    upState = (setState) => {

    }

    return [state, upState]
}

// =================================================================
// Use Store
[scores,setScore] = useStore("count",0)

