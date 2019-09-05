import React from "react";
import Welcome from "../../components/welcome";

class Dashboard extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      result: "No result"
    };
    this.handleScan = this.handleScan.bind(this);
  }

  handleScan(data) {
    if (data) {
      this.setState({
        result: data
      });
    }
  }

  render() {
    return (
      <React.Fragment>
        <Welcome userLogged={this.props.userLogged} />
      </React.Fragment>
    );
  }
}

export default Dashboard;
