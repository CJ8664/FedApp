import React, { Component } from 'react';
import fire from '../js/fire';
import logo from '../images/logo.svg';

class App extends Component {
  render() {
    return (
      <div>
    		<div className="jumbotron text-center">
    			<h1>Fed Day</h1>
    			<p>Select the Time to see the projects</p>
    		</div>
        <div className="container">
    			<div className="row">
    				<div className="col-lg-6">
                <div className="jumbotron text-center">
    					    <a href="pages/morning"><h2>Morning</h2></a>
                </div>
    				</div>
            <div className="col-lg-6">
                <div className="jumbotron text-center">
    					    <a href="pages/afternoon"><h2>Afternoon</h2></a>
                </div>
    				</div>
    			</div>
    		</div>
      </div>
    );
  }
}

export default App;
