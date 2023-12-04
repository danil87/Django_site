const defaultState = {
    item: {
        name: '',
        description: '',
        price: 0.0
    }
}

export const GET_ITEM = 'GET_ITEM'

export default function itemReducer(state = defaultState, action){
    switch (action.type){
        case  GET_ITEM:
            return {...state, item: action.payload}
        default:
            return state
    }
}

export const getItem = (item) => ({type: GET_ITEM, payload: item})