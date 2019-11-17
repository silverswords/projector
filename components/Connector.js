import { useEffect, useState } from "react"
// Design
// Action = Endpoint
// Decorators = Middleware
const Connector
const connect = (name) => (
    [state, setState] = useState(name)

    useEffect(
        Connector.subscribe(name,setState)
        return () =>{

        }
    )
)