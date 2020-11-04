import { types } from "../types/types";

export const add = ( ) => {
    return {
        type: types.ADD
    } 
}

export const rest = () => {
    return {
        type: types.REST
    }
}

export const reset = () => {
    return {
        type : types.RESET
    }
}