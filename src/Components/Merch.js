import React, {useContext} from 'react';
import {CartContext} from './CartContext';

export const Merch = (props) => {
    const [cart, setCart] = useContext(CartContext);

    const addToCart = () => {
        const item = { title: props.title, pris: props.pris, path: props.path, frequency: props.frequency, index: props.index};
        setCart(currentState => [...currentState, item]);
    }

    return (
        <div className="Database">
            <div>{props.title}</div>
            <div>{props.pris},-</div>
            <div>{props.path}</div>
            <button onClick={addToCart}>Legg til</button>
            <br/>
        </div>
    )
}