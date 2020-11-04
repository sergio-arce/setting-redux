import React from 'react'
import { useForm } from '../../hooks/useForm'
import { useDispatch } from 'react-redux'
import { login } from '../../redux/actions/auth'
import { store } from '../../redux/store/store'
import { add } from '../../redux/actions/couter'

export const LoginScreen = () => {

    const dispatch = useDispatch()

    const [values, changeValues, resetValues] = useForm({ 
        name: '',
        surname: ''
    })
    const { name, surname } = values

    const sendMessage = () => {
        dispatch( login( name, surname ) )
        dispatch( add() )
        resetValues()
    }

    const { counter } = store.getState() 

    return <>
        <h1>LoginScreen</h1>
        <input 
            name='name'
            value={ name }
            onChange={(e) => changeValues(e) }
        />
        <input 
            name='surname'
            value={ surname }
            onChange={(e) => changeValues(e) }
        />
        <button
            onClick={sendMessage}
        >
            Enviar
        </button>
        <p>{ counter }</p>
    </>
}