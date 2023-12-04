import React from "react";

import "./buybutton.css"

const BuyButton = ({ fetchAction }) => {
    return(
        <button className="buy_button" type="button" onClick={() => fetchAction()}>Buy</button>
    )
}

export default BuyButton