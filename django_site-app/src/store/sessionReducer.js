const defaultState = {
    sessionId: undefined
}

export const GET_SESSION_ID = 'GET_SESSION_ID'

export default function sessionReducer(state = defaultState, action){
    switch (action.type){
        case  GET_SESSION_ID:
            return {...state, sessionId: action.payload}
        default:
            return state
    }
}

export const getSessionId = (sessionId) => ({type: GET_SESSION_ID, payload: sessionId})