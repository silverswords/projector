import {Broadcast,connect} from './Connector'
import {useState} from 'react'
const Store = {}

export function useStore(key,value) {
    const [state,setState] = useState(value)
    connect(key,setState)

    return [state, (key,value) => {
        Broadcast(key,value)
    }]
}
