import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'

import { authReducer } from '../reducers/authReducer';
import { counterReducer } from '../reducers/counterReducer';

// middleware que nos sirve para que el estado se actualize
// Esta es la configuración de las devTools de redux 
const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;


// Esta función esta creada por si tenemos varios reducers, podremos añadirlo en este punto
const reducers = combineReducers({
    auth: authReducer,
    counter: counterReducer
})

// Dentro de la funcion createStore solo puedo enviarle un solo reducer
// por eso utilizamos combine reducers
export const store = createStore( 
    reducers,
    composeEnhancers(
        applyMiddleware( thunk )
    )
);