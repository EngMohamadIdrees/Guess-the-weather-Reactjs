import React from "react";
import ReactDOM from "react-dom/client";
import SeasonDisplay from "./SeasonDisplay";
import Spinner from "./Spinner";

class App extends React.Component {
  state = { lat: null, errorMessage: "" };

  componentDidMount() {
    // console.log("My Component was rendered to the screen");
    window.navigator.geolocation.getCurrentPosition(
      (positions) => this.setState({ lat: positions.coords.latitude }),
      (err) => this.setState({ errorMessage: err.message })
    );
  }

  // componentDidUpdate() {
  //   console.log("My Component was Updated - it rerendered!");
  // }

  renderContent() {
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage}</div>;
    }
    if (!this.state.errorMessage && this.state.lat) {
      return <SeasonDisplay lat={this.state.lat} />;
    }
    return <Spinner message="Please accept locationnnnnnnn  request." />;
  }

  render() {
    return <div className="border">{this.renderContent()}</div>;
  }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
