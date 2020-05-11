import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import { createStore } from 'redux'
import { Provider } from 'react-redux';


const reducerInitialState = {
    name: '',
};

// put your reducer here!
const nameReducer = (state = reducerInitialState, action) => {
    console.log('In reducer');
    if (action.type === "add") {
        console.log('in nameReducer adding:',action.payload )
        state = {
            ...state, 
            name: action.payload 
        }
    }
    return state;
}
// use reducer in store
const storeInstance = createStore(nameReducer);

ReactDOM.render(
    <Provider store={storeInstance}>
        <App />
    </Provider>,
    document.getElementById('root'));
