import { createStore, applyMiddleware } from 'redux'
import reduxLogger from 'redux-logger'

const initState = {
    posts : [],
    comments: [],
    visiable: 9
}

// action: {type, payload}
const reducers = (state = initState, action) => {

    switch(action.type){
        case 'FETCH_POSTS' : 
            return {
                ...state,
               posts : action.payload
            }
        case 'FETCH_COMMENTS' :{
            return {
                ...state,
               comments : action.payload
            }
        }
        case 'SET_VISIBLE_ITEMS' : {
            return{
                ...state,
                visiable: action.payload
            }
        }
        case 'GET_POST' : {
            return state.posts[action.payload]
            
        }
        case 'UPDATE_POST' : {
            return{
                ...state,
                posts :  state.posts.map( (item,index ) =>  index === action.payload.key ?   action.payload.obj :  state.posts )
            }
        }
        default : 
            return state
    }

} 

//createStore(reducers, applyMiddleware = '')

const store = createStore(reducers,applyMiddleware(reduxLogger));

export default store

// export default createStore(reducers)