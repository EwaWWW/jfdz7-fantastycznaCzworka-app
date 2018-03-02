import React, { Component } from 'react';
import Menu from './Menu';
import SearchView from "./SearchView/SearchView";


class App extends Component {
  render() {
    return (
      <React.Fragment>
          <SearchView/>
      </React.Fragment>
    );
  }
}

export default App;
