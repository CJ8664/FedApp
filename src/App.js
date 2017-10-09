import React, { Component } from 'react';
import fire from './fire';
import logo from './logo.svg';

class App extends Component {
  render() {
    return (
					<div className="container">
						<div className="jumbotron text-center">
							<h1>Fed Day</h1>
							<p>Select the Time to see the projects</p>
						</div>

						<div className="row">
							<div className="col-lg-6">
								<button type="button" className="btn btn-primary">Morning</button>
							</div>
							<div className="col-lg-6">
								<button type="button" className="btn btn-primary">Afternoon</button>
							</div>
							</div>
					</div>
    );
  }
}

export default App;
