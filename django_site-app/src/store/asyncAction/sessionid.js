import { getSessionId } from "../sessionReducer"

export const fetchSessionIdForItem = (id) => {
    return dispatch => {
        fetch(`http://localhost:8000/buy/${id}`)
            .then(response => response.json())
            .then(json => dispatch(getSessionId(json)))
    }
}

export const fetchSessionIdForOrder = (id) => {
    return dispatch => {
        fetch(`http://localhost:8000/buy/order/${id}`)
            .then(response => response.json())
            .then(json => dispatch(getSessionId(json)))
    }
}