import {Broadcast} from './Connector'
const Store = {}

export function useStore(key,value) {
    if (Store[key] !== undefined) {
        Store[key] = value
    }
    val = Store[key]
    connect(key)

    return value, (key,value) => {
        Broadcast(key,value)
    }
}
