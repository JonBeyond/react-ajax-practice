import React from 'react';
import ReactDOM from 'react-dom';
class App extends React.Component {
    constructor (props) {
        super(props) //I dont think any props will be required? TBD
    }
    AJAXclicker () {
        console.log("click");
    }
    render () {
        return ( //the code below should eventually render a few forms
            <div>
                  <div><h5> Welcome to the AJAX User Interface! Exciting! </h5></div>
                  <div>Please enter your name below</div>
                  <input name="username" type="text"></input>
                  <div>Please enter your message below</div>
                  <input name="message" type="text"></input>
                  <div>When you are ready, hit the submit button below</div>
                  <button type="button" onClick={() => this.AJAXclicker()}>Submit AJAX request</button>
            </div>
          )
    }

}

export default App;