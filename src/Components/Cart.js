import React, { useContext, useEffect } from 'react';
import {CartContext} from './CartContext';
let didmount = false;
let bigspender = true;


const Cart = () => {
    const [cart, setCart] = useContext(CartContext);
    const total = cart.reduce((tot, current) => tot+current.pris, 0);
    

    function clearCart () {
        alert ("Takk, din bestilling er sendt til butikken!")
        setCart([]);    
    }

    useEffect (() => {
        console.log("Didmount");
    },[]);

    useEffect (() => {
        if(didmount){
            console.log("Updating");
        } 
        else {
            didmount= true;
        }});

    useEffect (()=> {
        if(total>500){
            if (bigspender) {
            alert("Takk for at du handler så mye hos oss!")
            bigspender=false;
            }
        }
        
    })

    return (
        <div id="cart">
            <span>Varer i handlekurven : {cart.length}</span>
            <br />
            <span>Totalpris: {total} ,-</span>
            <div>
                
                {cart.map(item => (
                    <div key={item.index}>
                        {item.title} x {item.frequency} 
                    </div>
                ))}
                <button onClick={() => clearCart()}>Send bestilling</button>
            </div>
        </div>
    )
}
export default Cart;