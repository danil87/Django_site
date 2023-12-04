const defaultState = {
    order: {
        id: undefined,
        items: []
    }
}

export const GET_ORDER = 'GET_ORDER'

export default function orderReducer(state = defaultState, action){
    switch (action.type){
        case  GET_ORDER:
            return {...state, order: action.payload}
        default:
            return state
    }
}

export const getOrder = (order) => ({type: GET_ORDER, payload: order})