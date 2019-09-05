import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import Login from "../pages/login";

import { responseGoogleLogin } from "../actions/login.js";
import { saveUserLoggedInformation } from "../actions/user";

const mapStateToProps = state => {
  return {
    user: state.user.user,
    googleResponse: state.login.googleResponse
  };
};

const mapDispatchToProps = dispatch => {
  return {
    responseGoogleLogin: data => {
      dispatch(responseGoogleLogin(data));
    },
    saveUserLoggedInformation: data => {
      dispatch(saveUserLoggedInformation(data));
    }
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Login)
);
