import React from "react";
import { GoogleLogin } from "react-google-login";

class FormLogin extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
    this.responseFacebook = this.responseFacebook.bind(this);
    this.responseGoogle = this.responseGoogle.bind(this);
  }

  responseFacebook(response) {
    console.log("facebook");
    console.log(response);
  }

  responseGoogle(response) {
    console.log("google");
    this.props.onLogin(response);
  }

  render() {
    return (
      <div className="login-form">
        <form>
          <div className="logo-login">
            <img
              className="logo-pwa"
              src="./images/dextra-logo.png"
              alt="dextra-logo"
            />
          </div>
          <div className="form-group">
            <div className="input-group">
              <span className="input-group-addon">
                <i className="fa fa-user" />
              </span>
              <input
                type="text"
                className="form-control"
                name="username"
                placeholder="login"
                required="required"
              />
            </div>
          </div>
          <div className="form-group">
            <div className="input-group">
              <span className="input-group-addon">
                <i className="fa fa-lock" />
              </span>
              <input
                type="password"
                className="form-control"
                name="password"
                placeholder="senha"
                required="required"
              />
            </div>
          </div>
          <div className="form-group">
            <button
              type="submit"
              className="btn login-btn btn-block custom-pwa-button"
            >
              Entrar
            </button>
          </div>
          {/* <div className="clearfix">
            <label className="pull-left checkbox-inline">
              <input type="checkbox" /> Remember me
            </label>
            <a href="javascript:;" className="pull-right">
              Forgot Password?
            </a>
          </div> */}
          <div className="or-seperator">
            <i>ou</i>
          </div>
          <p className="text-center">Entre com suas redes sociais</p>
          <div className="d-inline mx-auto center custom-login-button">
            <GoogleLogin
              clientId="374452636480-qjpmughn99li9hmrnue7g38h91mmbhs6.apps.googleusercontent.com"
              buttonText="LOGIN WITH GOOGLE"
              onSuccess={this.responseGoogle}
              onFailure={this.responseGoogle}
              cookiePolicy={"single_host_origin"}
            />
          </div>
        </form>
        <p className="text-center text-muted small">
          Ainda não tem uma conta? <a href="javascript:;">Cadastre-se aqui!</a>
        </p>
      </div>
    );
  }
}

export default FormLogin;
