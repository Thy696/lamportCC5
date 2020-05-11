import React, { Component } from 'react';
import logo from './logo.svg';
import reduxLogo from './redux.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';


// components
import SpeedControl from '../SpeedControl/SpeedControl';
import Passengers from '../Passengers/Passengers';
import Dashboard from '../Dashboard/Dashboard';


class App extends Component {
  //Create a state to store data name
  state = {
    name: '',
  }
  //Create an handle change for name input field 
  handleChangefor = (event) => { //handle change for inputs
    console.log('in input field', event.target.value)
    this.setState({
      ...this.state.name,
      name: event.target.value
    })
  }

  addName = () => {
    console.log('in addName',this.state.name);
    this.props.dispatch(
      {
        type: 'add',
        payload: this.state.name
      });
  }
  //  add new name by press Enter in keyboard
  keyPressed = (event) => {
    if (event.key === "Enter") {
      console.log(' keyPressed Worked!')
      this.addName();
    }
  }

  render() {
    return (
      <>
        <Router>
          <div className="App">
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <img src={reduxLogo} className="App-logo" alt="logo" />
              <h1 className="App-title">Welcome to React Redux</h1>
              <nav>
                <ul>
                  <li><Link to="/">Speed Control</Link></li>
                  <li><Link to="/passengers">Passengers</Link></li>
                  <li><Link to="/dashboard">Dashboard</Link></li>
                </ul>
              </nav>
            </header>

            <div className="content-container">
              <Route exact path="/" component={SpeedControl} />

              <Route path="/passengers"
                render={(props) => <Passengers {...props}
                  handleChangefor={this.handleChangefor} // send function handleChangeFor to Passengers component
                  keyPressed={this.keyPressed}
                  name={this.state.name}
                  addName = {this.addName}
                  reduxState={this.props.reduxState}
                />}
              />

              <Route path="/dashboard" component={Dashboard} />
            </div>

          </div>
        </Router>
        {/* <h1>{JSON.stringify(this.props.reduxState)}</h1> */}


      </>
    );
  }
}

const putReduxStateOnProps = (reduxState) => ({ reduxState });
export default connect(putReduxStateOnProps)(App);
