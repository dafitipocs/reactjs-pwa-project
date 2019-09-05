import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import Dashboard from "../pages/dashboard";

const mapStateToProps = state => {
  return {
    userLogged: state.user.userLogged
  };
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Dashboard)
);
