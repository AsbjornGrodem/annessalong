import React, { useContext } from 'react';
import {CartContext} from './CartContext';
import {Merch} from './Merch';



const Cart = () => {
    const [cart, setCart] = useContext(CartContext);
    const total = cart.reduce((tot, current) => tot+current.pris, 0);

    function clearCart () {
        alert ("Takk, din bestilling er sendt til butikken!")
        setCart([]);    
    }

    return (
        <div id="cart">
            <span>Varer i handlekurven : {cart.length}</span>
            <br />
            <span>Totalpris: {total} ,-</span>
            <div>
                
                {cart.map(item => (
                    <div>
                        {item.title} x {item.frequency} 
                    </div>
                ))}
                <button onClick={() => clearCart()}>Send bestilling</button>
            </div>
        </div>
    )
}
export default Cart;