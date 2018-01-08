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

///// more clear way to write handle event /////
import React, { Component } from 'react';

class SearchBar extends Component {
  render() {
    // if only i line, can define w/o parethesis
    return <input onChange={event => console.log(event.target.value);}/>;
    
    // return <input onChange={(event) => console.log(event.target.value);}/>;
  }
}
