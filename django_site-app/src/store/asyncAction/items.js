import { getItem } from "../itemReducer"

export const fetchItems = (id) => {
    return dispatch => {
        fetch(`http://localhost:8000/item/${id}`)
            .then(response => response.json())
            .then(json => dispatch(getItem(json)))
    }
}