import { Fragment } from "react"

Action = Endpoint
Decorators = Middleware


function useDispatch(Action,data) {

}

function useAdd(Action) {

}

// Use Connetor ============================= 
dispatchAction = useDispatch()

addScores = function(addcount){
    state, setState = useStore("scores",0)
    setState(state+addcount) 
}

useAddAction(addScores)

useDispatch("addAction",data)

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
