import React from "react";
import _ from "lodash";
import FormLogin from "../../components/forms/login";
import "../../assets/login/login.css";

class Login extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
    this.onLogin = this.onLogin.bind(this);
  }

  onLogin(response) {
    this.props.responseGoogleLogin(response);
    if (this.props.googleResponse.error) {
      console.log(this.props.googleResponse);
    } else {
      if (!_.isEmpty(this.props.googleResponse)) {
        this.props.saveUserLoggedInformation(response.profileObj);
        this.props.history.push("/dashboard");
      }
    }
  }

  render() {
    return <FormLogin onLogin={this.onLogin} />;
  }
}

export default Login;
