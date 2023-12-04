import React from "react";
import Item from "./Item";
import "./itemlist.css"

const ItemList = ({ items, totalPrice }) => {
    return(
        <div className="item_list">
            {items.map((item) => <Item key={item.id} item={item} />)}

            {/* <p>totalPrice: {totalPrice}</p> */}
        </div>
    )
}

export default ItemList