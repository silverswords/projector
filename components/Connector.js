import { useState } from "react"
// Design
// Action = Endpoint
// Decorators = Middleware

const Store = {}

function add(key,init) {
    [value,setValue] =useState(init)
    Store[key].value = value
    Store[key].set = setValue
}

function update(key,value){
    
}

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

// Use Connetor ============================= 
addScores = function(addcount){
    state, setState = useStore("scores",0)
    setState(state+addcount) 
}

useAddAction(addScores)

useDispatch("addAction",data)

// =================================
[xxx,setXXX] = useStore(xxx,init){
    Store.PropTypes.xxx = init
    setXXX = () => {

    }
    return [xx,setXXX]
}


// =================================

function useConnect(Store) {
    return (Store) => action => {
        useAddAction(action)
    }
}

add = useConnect(Store)

add((Store) =>{
   s,setS = Store.get("Scores") 
   setS(1)
})
