import { getOrder } from "../orderReducer"

export const fetchOrder = (id) => {
    return dispatch => {
        fetch(`http://localhost:8000/order/${id}`)
            .then(response => response.json())
            .then(json => dispatch(getOrder(json)))
    }
}