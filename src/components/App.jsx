import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import { EventEmitter } from 'events';

class App extends React.Component {
    constructor (props) {
        super(props); //I dont think any props will be required? TBD
        this.handleSubmit = this.handleSubmit.bind(this); //forever binds this to the App instance.
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            username: 'default',
            message: 'default'
        }
    }
    handleChange (event) {
        //in here I will set state
        event.preventDefault(); //stops HTML from being submitted
        console.log(`debug: username: ${event.target.username.value}, message: ${event.target.message.value}`)
        this.setState({
            username: event.target.username.value,
            message: event.target.message.value
        })


    }
    handleSubmit (event) {
        /* Input: username and text
         * Output: an AJAX post command
         * Side-effect: needs to display the AJAX response on the screen
         * Detailed steps TBD. Want to load JQUERY successfully.
         */
        event.preventDefault(); //stops HTML from being submitted
        let message = {
            "name": this.state.username,
            "message": this.state.message
        }

        $.ajax({
            url: 'http://ec2-13-57-25-101.us-west-1.compute.amazonaws.com:3000/api/hrsf110/greeting',
            type: 'POST',
            data: JSON.stringify(message),
            contentType: 'application/json',
            success: (success) => {console.log(`POST Success: ${JSON.stringify(success)}`)},
            error: (error) => {console.log(`POST error: ${JSON.stringify(error)}`)}
        })

    }
    render () {
        return (
            <div>
                <div><h5> Welcome to the AJAX User Interface! Exciting! </h5></div>
                <form onSubmit={this.handleChange}>
                    <label htmlFor='username'>Enter Username  </label>
                    <input id='username' name='username' type='text' />
                    <br></br>
                    <label htmlFor='message'>Enter Message  </label>
                    <input id='message' name='text' type='text' />
                    <br></br>
                    <button>Store Username and Message</button>
                </form>
                <form onSubmit={this.handleSubmit}>
                    <button>Submit AJAX POST</button>
                </form>
                    <div>AJAX Response below</div>
                    <div id="AJAX">TBD</div>
            </div>
          )
    }
}

export default App;