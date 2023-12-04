import React from "react";
import { Route, Routes } from "react-router-dom"
import ItemInfo from "./components/ItemInfo";
import Order from "./components/Order";
import { useSelector } from "react-redux";
import { loadStripe } from "@stripe/stripe-js"
import { useEffect } from "react";

const App = () => {
    const sessionId = useSelector(state => state.sessionId.sessionId)

    useEffect(() => {
        const redirect = async () => {
            if (sessionId){
                const stripePromise = loadStripe(sessionId.key)
                const stripe = await stripePromise;
                stripe.redirectToCheckout({sessionId: sessionId.session_id}) 
            }
        }
        redirect()
    }, [sessionId])


    return (
        <Routes>
            <Route path='front'>
                <Route path="item"> 
                    <Route path=":itemId"  element={<ItemInfo />}/>
                </Route>
                <Route path="order/:orderId" element={<Order />}/>
            </Route>
        </Routes>
    )
}

export default App;