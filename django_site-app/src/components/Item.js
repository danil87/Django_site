import React from "react";

const Item = ({item}) => {
    return(
        <div className="item">
            <p>name: {item.name}</p>
            <p>description: {item.description}</p>
            <p>price: {item.price}</p>
        </div>
    )
}

export default Item