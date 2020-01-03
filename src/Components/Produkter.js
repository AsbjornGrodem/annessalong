import React from 'react';
import Cart from './Cart';
import Database from './Database'


function Produkter () {
    return (
        <div>
            <h2>Dette er produktene vi har i vår butikk: </h2>
            
            
            <Database />
            <br />
            <Cart/>
        </div>
    )
    }
export default Produkter;

{/*As I was learning I found better ways to write the code, this was a previous version. 
 
function Todo({item, index, leggBort, leggTil, addtoCart, cartitem}) {
    return (
        <div className="main">
            <div id="buttons">
            <button onClick= {() => leggBort(index)} type="button"> - </button>
            {item.frequency}  
            <button onClick= {() => leggTil(index)} type="button" > + </button>
            <button onClick= {() => addtoCart(index)} type="button"> Legg til handlekurven</button>
            </div>
        </div>
    )
}



    const [item, changelist] = useState([
        
        
    const [cartitem, changecart] = useState([
        
    ]);
    const leggBort = index => {
        const newList = [...item];
        if (newList[index].frequency>0) {
            newList[index].frequency = newList[index].frequency - 1;
            changelist(newList)};
    }
    const addtoCart = index => {
        const newCart = [...item];
        cartitem.push(newCart[index])
        changecart(cartitem);
        console.log(cartitem.frequency);

        
       // changecart(cartitem[index].concat(item));         
    }
    const leggTil = index => {
        const newList = [...item];
        newList[index].frequency = newList[index].frequency + 1;
        changelist(newList);
    }

    return (
        <div className="app">
            <table>
                <thead>
                    <tr>
                        <th>Navn</th>
                        <th>Image</th>    
                        <th>Pris</th>
                        <th>Antall</th>
                    </tr>
                </thead>
                <tbody>
                   <Cart />
                </tbody>
                <tbody>
                    {item.map((item, index, cartitem) => (
                        <tr>
                            <td>{item.title}</td>
                            <td><img src={`./images/${item.path}.jpg`} alt={item.path}/></td>
                            <td>{item.pris},-</td>
                            <td><Todo index={index} item={item} leggBort={leggBort} leggTil={leggTil} 
                             addtoCart={addtoCart} cartitem={cartitem} key={index} /></td>
                            <td>{cartitem.title}</td>
                        </tr>
                    ))}
                    </tbody>
            </table>
    )
}

*/}
