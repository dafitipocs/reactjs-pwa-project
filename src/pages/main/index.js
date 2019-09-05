import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { configureHistory } from "../../router/history";
import store from "../../store";
import "../../assets/application/application.css";
import "../../assets/dashboard/dashboard.css";
import Login from "../../containers/login";
import Dashboard from "../../containers/dashboard";

const history = configureHistory();

class App extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <React.Fragment>
        <Provider store={store}>
          <Router history={history}>
            <Route path="/" component={Login} exact />
            <Route path="/dashboard" component={Dashboard} />
          </Router>
        </Provider>
      </React.Fragment>
    );
  }
}

export default App;
