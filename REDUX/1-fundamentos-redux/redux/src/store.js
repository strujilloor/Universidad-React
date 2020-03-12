import { createStore } from 'redux'

// Nombres de constantes de acciones
const INCREMENT = 'INCREMENT'
const DECREMENT = 'DECREMENT'

// REDUCER
// Es una funcion pura que nos regresa el
// estado actual
const initialState = 0

function counter ( state = initialState, action ) {
    switch ( action.type ) {
        case INCREMENT:
            return state + 1

        case DECREMENT:
            return state - 1

        default:
            return state
    }
}

// store.subscribe(() => {
//     console.log( 'store.getState()', store.getState() );
// })

// Creadores de acciones
export const increment = () => {
    return {
        type: INCREMENT
    }
}

export const decrement = () => {
    return {
        type: DECREMENT
    }
}

// ACCIONES
// store.dispatch( increment() )

// setTimeout(() => {
//     store.dispatch( decrement() )
// }, 2000)

// store.getState()
// store.dispatch()
// store.subscribe(fun)

// STORE
// Almacenamiento de nuestro estado
const store = createStore( counter )

export default store