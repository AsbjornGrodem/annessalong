
import React from 'react';
import Calendar from 'react-calendar';

function Dashboard() {
  
    return (
      <div>
        <h2>Bestill time</h2>
        <Calendar />
        <br/>
        <form>
          Navn: 
          <input type="text"></input>
          <button>Send bestilling</button>
        </form>
      </div>
    );
  }

  export default Dashboard;