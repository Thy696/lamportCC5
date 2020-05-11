import React, { Component } from 'react';
// THIS COMPONENT IS OUR INTERFACE FOR PASSENGER CHECK IN
// YOU SHOULD DISPLAY THE CURRENT PASSENGERS
// INPUT SHOULD COLLECT INFO, BUTTON SHOULD ADD THEM TO THE LIST

class Passengers extends Component {

  addName = () => {
    console.log('in addName');
    this.props.dispatch({
      type: 'add',
      payload: this.props.name
    })
  }

  // add new name by press Enter in keyboard
  // keyPressed = (event) => {
  //   if (event.key === "Enter") {
  //     console.log(' keyPressed Worked!')
  //     this.addName();
  //   }
  // }

  render() {
    return (
      <div>
        <h2>Passengers</h2>

        <input type="text" name="name" placeholder="Enter Name"
          //use handleChangeFor function which was passed from App.js to take data
          onChange={this.props.handleChangeFor}
          onKeyPress={this.props.keyPressed}

        />
        <button onClick={this.addName}>Add Passenger</button>

        <ul>PASSENGER LIST: GOES HERE

          <li>Thy</li>

        </ul>
       <h1>{JSON.stringify(this.props.listOfName)}</h1> 
      </div>
    )
  }
}

export default Passengers;