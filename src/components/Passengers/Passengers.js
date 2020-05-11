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
          onChange={this.props.handleChangefor}
          onKeyPress={this.props.keyPressed}

        />
        <button onClick={this.props.addName}>Add Passenger</button>

        <ul>PASSENGER LIST: GOES HERE

          <li>Thy</li>
          {/* <li>{this.props.reduxState}</li> */}
        </ul>

        <h1>Redux State: {JSON.stringify(this.props.reduxState)}</h1> 
        {/* <h1>{JSON.stringify(this.props.name)}</h1>  */}

      </div>
    )
  }
}

export default Passengers;