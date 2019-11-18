import { useEffect, useState } from "react"
// Design
// Action = Endpoint
// Decorators = Middleware
export {Broadcast,Subscribe,UnSubscribe}
const Connector = {}

const Broadcast = (name, state) => {
    if (!Connector[name]) return;
    Connector[name].forEach(setter => setter(state))
}

const Subscribe = (name, setter) => {
    if (!Connector[name]) Connector[name] =[];
    Connector[name].push(setter)
}

const UnSubscribe = (name, setter) => {
    if (!Connector[name]) return
    const index = Connector[name].indexOf(setter)
    if (index !== -1) Connector[name].splice(index, 1)
}

const connect = () => {
    [, setState] = useState()
    useEffect(() =>{
        Subscribe(name, setState)
        return () => UnSubscribe(name,setState)
    },[])
}