import { useEffect, useState } from "react"
// Design
// Action = Endpoint
// Decorators = Middleware
export {Broadcast,Subscribe,UnSubscribe,connect}
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

const connect = (name,setState) => {
    console.log('connect')
    useEffect(() =>{
        Subscribe(name, setState)
        console.log('subscirbe',name)
        return () => {
            UnSubscribe(name,setState)
            console.log('unsubscribe',name)
        }
    },[])
}