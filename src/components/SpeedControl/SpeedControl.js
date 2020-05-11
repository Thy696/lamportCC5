import React, { Component } from 'react';
// THIS COMPONENT IS OUR INTERFACE FOR SPEED
// YOU SHOULD DISPLAY THE CURRENT SPEED
// BUTTONS SHOULD INCREASE OR DECREASE SPEED, RESPECTIVELY

class SpeedControl extends Component {

state = {
   speed :0 
}
   handleIncrease= () =>{
    console.log('Increase clicked!')
    this.setState({ 
      speed: this.state.speed + 1 
    });

  }

   handleDecrease= () =>{
    console.log('Increase clicked!')
    this.setState({ 
      speed: this.state.speed - 1 
    });
  }
  render() {
    

    
    return (
      <div>
        <h2>Speed Control</h2>

        <button onClick = {this.handleIncrease}>Increase Speed</button>
        <p>SPEED: {this.state.speed}</p>
        <button onClick = {this.handleDecrease}>Decrease Speed</button>
      </div>
    )
  }
}

export default SpeedControl;