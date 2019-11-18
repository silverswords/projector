import { useEffect } from "react"

// Design
// Action = Endpoint
// Decorators = Middleware

const Connector = {}

const Broadcast = (namespace, state) => {
    if (!Connector[namespace]) return;
    Connector[namespace].forEach(setter => setter(state))
}

const Subscribe = (namespace, setter) => {
    if (!Connector[namespace]) Connector[namespace] =[];
    Connector[namespace].push(setter)
}

const UnSubscribe = (namespace, setter) => {
    if (!Connector[namespace]) return
    const index = Connector[namespace].indexOf(setter)
    if (index !== -1) Connector[namespace].splice(index, 1)
}

const connect = (namespace,setState) => {
    console.log('connect')
    useEffect(() =>{
        Subscribe(namespace, setState)
        console.log('subscirbe',namespace)
        return () => {
            UnSubscribe(namespace,setState)
            console.log('unsubscribe',namespace)
        }
    },[])
}

export {Broadcast,Subscribe,UnSubscribe,connect}
