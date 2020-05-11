import React, { Component } from 'react';
// THIS COMPONENT IS OUR INTERFACE FOR PASSENGER CHECK IN
// YOU SHOULD DISPLAY THE CURRENT PASSENGERS
// INPUT SHOULD COLLECT INFO, BUTTON SHOULD ADD THEM TO THE LIST

class Passengers extends Component {
  render() {
    return (
      <div>
        <h2>Passengers</h2>

        <input type="text" name="name" placeholder="Enter Name"
        //use handleChangeFor function which was passed from App.js to take data
          onChange={this.props.handleChangeFor} 
          onKeyPress={this.props.keyPressed}

        />
        <button>Add Passenger</button>

        <ul>PASSENGER LIST: GOES HERE

          <li>Thy</li>

        </ul>

      </div>
    )
  }
}

export default Passengers;