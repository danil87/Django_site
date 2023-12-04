import React from "react";
import { useEffect, useCallback } from "react";
import { useParams } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux";
import { fetchOrder } from "../store/asyncAction/order";
import ItemList from "./ItemList";
import { fetchSessionIdForOrder } from "../store/asyncAction/sessionid";
import BuyButton from "./BuyButton";

import "./order.css"

const Order = () => {
    const order = useSelector(state => state.order.order)
    // const [orderPrice, setOrderPrice] = useState(0)

    const dispatch = useDispatch()
    const { orderId } = useParams()
        
    const getSessionId = () => { dispatch(fetchSessionIdForOrder(orderId)) }

    const getOrder = useCallback(() => {
        dispatch(fetchOrder(orderId))
    }, [orderId, dispatch])
    
    useEffect(() => {
        getOrder()
    }, [getOrder])

    // useEffect(() => {
    //     setOrderPrice(0)
        
    //     order.items.forEach(item => {
    //         console.log(orderPrice)
    //         setOrderPrice(orderPrice + item.price)
    //     })
    // }, [order])

    return(
        <div className="order">
            <ItemList items={order.items} />
            <BuyButton fetchAction={getSessionId} />
        </div>
    )
}

export default Order