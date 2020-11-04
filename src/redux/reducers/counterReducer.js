import { types } from "../types/types";

export const counterReducer = ( state = 0 , action ) => {
    switch ( action.type ) {
        case types.ADD: 
            return  state + 1
        case types.REST: 
            return state === 0 ? 0 : state - 1
        case types.RESET:
            return state = 0
            
        default: 
            return state
    }
}