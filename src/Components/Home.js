import React from 'react';



function Home() {
    return (
      <div>
        <div className="row">
          <div className="side">
            <h2>Velkommen til Annes salong!</h2>
            <h5>Våre åpningstider er: </h5>
            <div className="fakeimg" > Man-Fre 09.00-16.00
                Lørdag 10.00-14.000
          </div>
         </div>
        </div>
        
        <div className="main">
          
          <h2>Juletilbud</h2>
          <h5>I romjulen har vi mange gode tilbud</h5>
        </div>

        <div className="main">
          <h2>post 2</h2>
          <h5>post 2 tekst</h5>
        </div>

        <div className="main">
          <h2>post 3</h2>
          <h5>post 3 tekst</h5>
        </div>
      </div>
    );
  }
  


export default Home;