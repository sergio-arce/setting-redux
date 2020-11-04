import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { add, rest, reset } from '../../redux/actions/counter'

export const Counter = () => {

    const dispatch = useDispatch()
    const counter = useSelector( state => state.counter )

    return <div style={{ textAlign: 'center' }}>
        <h1>Counter example</h1>
        <p>{ counter }</p>
        <button
         onClick={ () => dispatch( add() ) }
        > 
         + 
        </button>
        <button
         onClick={ () => dispatch( rest() ) }
        > 
         -
        </button>
        <button
         onClick={ () => dispatch( reset() ) }
        > 
         Reset
        </button>
    </div>
}

