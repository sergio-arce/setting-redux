import { useState } from 'react'

export const useForm = ( initialState = {} ) => {

    const [inputsValues, setInputsValues] = useState( initialState )
    
    const inputsReset = () => {
        setInputsValues( initialState )
    }

    const inputsChange = ({ target }) => {
        setInputsValues({
            ...inputsValues,
            [ target.name ]: target.value,
        })
    }

    return [ inputsValues, inputsChange, inputsReset]
}