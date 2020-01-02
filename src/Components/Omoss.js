import React from 'react';
import maps from '../images/maps.jpg';
  
function Omoss() {
    return (
      <div>
        <h2>Om oss</h2>
        <div>
          Vi er tre jenter som jobber i Annes salong. Salongen befinner seg i Fjell kommune på 
          Sotra, ca 20 minutter fra Bergen sentrum. 
          <img id="googlemaps" src={maps}></img>
        </div>
      </div>
    );
  }
  
  export default Omoss;