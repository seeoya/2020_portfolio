import React, { Component } from "react";
import "./App.css";
import Portfolio from "./Portfolio";
import Profile from "./Profile";
import Contact from "./Contact";

class App extends Component {
  state = {};

  changePage = (num) => {
    this.setState({
      selectPage: num
    });
    return;
  };

  render() {
    return (
      <div className="header">
        <input type="button" onClick={() => this.changePage(1)} value="asd" />
        <input type="button" onClick={() => this.changePage(2)} value="asd" />
        <input type="button" onClick={() => this.changePage(3)} value="asd" />
        <input type="button" onClick={() => this.changePage(4)} value="asd" />

        <Portfolio selectPage={this.state.selectPage} />
        <Profile />
        <Contact />
      </div>
    );
  }
}

App.defaultProps = {
  selectPage: 3
};

export default App;
