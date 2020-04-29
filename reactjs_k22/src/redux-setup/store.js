import { createStore, applyMiddleware } from 'redux'
import reduxLogger from 'redux-logger'
const initState = {
    title : 'Default title when load app',
    currentTime: 10
}

// action: {type, payload}
const reducers = (state = initState, action) => {

    switch(action.type){
        case 'UPDATE_TITLE' : 
            return {
                ...state,
                title : action.payload
            }
        case 'UPDATE_TIME' : {
            return {
                ...state,
                defaultTime: action.payload
            }

        }
        default : 
            return state
    }

} 

// createStore(reducers, applyMiddleware = '')

const store = createStore(reducers,applyMiddleware(reduxLogger));

export default store