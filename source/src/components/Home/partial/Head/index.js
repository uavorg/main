import React, { Component } from "react";
import Header1 from "../../../shared/Header1.js";

class Head extends Component {
  constructor(props) {
    super(props);
    this.scrollHandler = this.scrollHandler.bind(this);
    this.state = {
      top: 0
    };
  }
  componentDidMount() {
    window.addEventListener("scroll", this.scrollHandler);
  }
  componentWillUnmount = () => {
    window.removeEventListener("scroll", this.scrollHandler);
  };

  scrollHandler(event) {
    let scrollTop =
      document.documentElement.scrollTop || document.body.scrollTop;
    this.setState({
      top: scrollTop
    });
  }

  render() {
    const top = this.state.top;
    return (
      <div>
        <Header1 scroll={true} hide={top <= 150} />
      </div>
    );
  }
}

export default Head;
