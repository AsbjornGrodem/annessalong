import React, {useState} from 'react';
import ReactDOM from 'react-dom';   

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

function Produkter () {
    const [item, changelist] = useState([
        {
            title: 'Kérastase Resistance Bain Force Architecte Shampoo 250ml',
            isCompleted: false,
            frequency: 1,
            pris: 90, 
            index: 1,
            path: "shampoo"
        },
        {
            title: 'Renati Straight Hold Glaze Strong Hold 100ml',
            isCompleted: false,
            frequency: 1,
            pris: 79,
            index: 2,
            path: 'renati'
        },
        {
            title: 'Kérastase Resistance Ciment Anti-Usure 200ml',
            isCompleted: false,
            frequency: 1,
            pris: 49,
            index: 3,
            path: 'balsam'
        }
    ]); 

    const [cartitem, changecart] = useState([
        {
            title: 'hårføner',
            isCompleted: false,
            frequency: 1,
            pris: 299,
            index: 4
        },
        {
            title: 'rettetang',
            isCompleted: false,
            frequency: 1,
            pris:500,
            index: 5
        }
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
        console.log(cartitem);
        changecart(cartitem)
        
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
                    {item.map((item, index) => (
                        <tr>
                            <td>{item.title}</td>
                            <td><img src={`./images/${item.path}.jpg`} alt={item.path}/></td>
                            <td>{item.pris},-</td>
                            <td><Todo index={index} 
                            item={item} leggBort={leggBort} 
                            leggTil={leggTil} addtoCart={addtoCart} /></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}




/*
<div className="todo-list">
{item.map((item, index) => (<Todo key={index} index={index} item={item} 
leggBort={leggBort}
leggTil={leggTil}
addtoCart={addtoCart}

/> 
))}
*/
export default Produkter;