//this ReactDom will usually be done at one place b/c we only need to inject
//the javascript code once into index.html
// import ReactDom from "react-dom";

"use strict";

const e = React.createElement;

class CountButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  render() {
    return e(
      "button",
      { onClick: () => this.setState({ count: this.state.count + 1 }) },
      `Display Count: ${this.state.count}`
    );
  }
}

const domContainer = document.getElementById("button-container");
const root = ReactDOM.createRoot(domContainer);
root.render(e(CountButton));
