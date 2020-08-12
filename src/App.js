import React, { Component } from "react";
import $ from "jquery";
import "./App.css";
import Main from "./Main";
import Profile from "./Profile";
import Portfolio from "./Portfolio";
import Contact from "./Contact";

class App extends Component {
  state = { selectPage: 0 };

  componentDidMount() {
    $(".nav__button").eq(this.state.selectPage).addClass("nav__button--active");
  }
  componentDidUpdate() {
    $(".nav__button").removeClass("nav__button--active");
    $(".nav__button").eq(this.state.selectPage).addClass("nav__button--active");
  }

  changePage = (num) => {
    this.setState({
      selectPage: num
    });
    return;
  };

  navList = [
    {
      id: 0,
      title: "MAIN"
    },
    {
      id: 1,
      title: "PROFILE"
    },
    {
      id: 2,
      title: "PORTFOLIO"
    },
    {
      id: 3,
      title: "CONTACT"
    }
  ];

  pageSwitch = (num) => {
    switch (num) {
      case 1:
        return (
          <div className="page">
            <Profile />
          </div>
        );
      case 2:
        return (
          <div className="page page--portfolio">
            <Portfolio />
          </div>
        );
      case 3:
        return (
          <div className="page">
            <Contact />
          </div>
        );
      default:
        return (
          <div className="page">
            <Main />
          </div>
        );
    }
  };

  render() {
    return (
      <div id="wrap">
        <header className="header">
          <div className="header__logo" onClick={() => this.changePage(0)}>
            Seeoya
          </div>
          <nav className="nav">
            {this.navList.map((index) => (
              <span key={index.id}>
                <a className="nav__button" onClick={() => this.changePage(index.id)}>
                  {index.title}
                </a>
              </span>
            ))}
          </nav>
        </header>
        <section>
          <article>{this.pageSwitch(this.state.selectPage)}</article>
        </section>
        <footer className="footer">
          <address></address>
          <p>ⓒSEEOYA 2020, ALL RIGHTS RESERVED</p>
        </footer>
      </div>
    );
  }
}

export default App;
