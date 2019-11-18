import React , { useEffect, useState } from 'react'
import Connector,{Broadcast} from './Connector'
const Store = {}

export function useStore(key,value) {
    if (Store[key] !== undefined) {
        Store[key] = value
    }
    val = Store[key]
    connect(key)

    return value
}

export function Action(key,value) {
    Broadcast(key,value)
}