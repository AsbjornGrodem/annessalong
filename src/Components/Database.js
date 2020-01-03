import React from 'react';
import {Merch} from './Merch';

const Database = () => {

    const database = [
        {   title: 'Kérastase Resistance Bain',
            frequency: 1,
            pris: 90, 
            index: 1,
        },
        {   title: 'Renati Straight Hold ',
            frequency: 1,
            pris: 79,
            index: 2,
        },
        {   title: 'Kérastase Resistance Ciment',
            frequency: 1,
            pris: 49,
            index: 3,
        }
    ] 

    return (
        
        <div id="database">
            {
                database.map(item => (
                    <Merch title={item.title} frequency={item.frequency} pris={item.pris}
                    index={item.index} path={item.path} key={item.index}/>
                ))
            }
            
        </div>
    )
}

export default Database;