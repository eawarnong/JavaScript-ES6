import React from 'react';

class SearchBar extends React.Component {
}

///// can be more clear //////
import React, { Component } from 'react';

class SearchBar extends Component {
  render() {
    return <input />;
  }
}

export default SearchBar;

///// to handle event change /////
import React, { Component } from 'react';

class SearchBar extends Component {
  render() {
    return <input onChange={this.onInputChange}/>;
  }
  
  onInputChange(event) {
    console.log(event.target.value);
  }
}

export default SearchBar;

///// more clear way to write handle event /////
import React, { Component } from 'react';

class SearchBar extends Component {
  render() {
    // if only i line, can define w/o parethesis
    return <input onChange={event => console.log(event.target.value);}/>;
    
    // return <input onChange={(event) => console.log(event.target.value);}/>;
  }
}

export default SearchBar;

///// Add State /////
import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    
    this.state = {term : ''};
  }
  
  render() {
    // update state every times state change
    // print out typed value in real time
    return (
      <div>
        <input onChange={event => this.setState({term : event.target.value}) />
        Value of input : {this.state.term}
      </div>
    );
  }
}

export default SearchBar;

///// Use state to assign value
import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    
    this.state = {term : 'Starting Value'};
  }
  
  render() {
    // everytime state changed, the component is rerender.
    // the value will be assigned as a state term
    return (
      <div>
        <input 
         value={this.state.term}
         onChange={event => this.setState({term : event.target.value}) />
      </div>
    );
  }
}

export default SearchBar;
