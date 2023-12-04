import React from "react";
import Item from "./Item";
import { useEffect, useCallback } from "react";
import { useParams } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux";
import { fetchItems } from "../store/asyncAction/items";
import { fetchSessionIdForItem } from "../store/asyncAction/sessionid";
import BuyButton from "./BuyButton";

import './iteminfo.css'

const ItemInfo = () => {
    const item = useSelector(state => state.item.item)
    
    const dispatch = useDispatch()
    const { itemId } = useParams()
        
    const getSessionId = () => { dispatch(fetchSessionIdForItem(itemId)) }

    const getItems = useCallback(() => {
        dispatch(fetchItems(itemId))
    }, [itemId, dispatch])

    useEffect(() => {
        getItems()
    }, [getItems])

    return(
        <div className="item_info">
            <Item item={item} />
            <BuyButton fetchAction={getSessionId} />
        </div>
    )
}

export default ItemInfo