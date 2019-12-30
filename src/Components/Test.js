import React, {useState, useEffect } from 'react';
import About from './About';
import {   BrowserRouter as Router,   Switch,    Route,    Link  } from "react-router-dom";
import Home from './Home';
import Dashboard from './Dashboard'
import Produkter from './Produkter'


function Test () {
    const [counter, changecount] = useState ([
        {
        count: 1,
        tags: 'tag1'
    }
    ])

    return (
        <div>
            {counter.count}
        </div>
        )
}
 /*
formatCount() {
    const {count} = this.state;
    return count === 0 ? 'Zero ': count;
}

getBadgeClasses () {
    let classes= "badge m-2 badge-";
    classes += (this.state.count === 0) ? "warning" : "primary";
    return classes;
}*/
export default Test;

 