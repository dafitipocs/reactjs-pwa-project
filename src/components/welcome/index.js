import React from "react";
import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile,
  mobileVendor,
  mobileModel,
  engineName,
  engineVersion,
  deviceType,
  osName,
  osVersion
} from "react-device-detect";

class Welcome extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { userLogged } = this.props;
    const { givenName } = userLogged;
    return (
      <React.Fragment>
        <nav className="site-header sticky-top py-1">
          <div className="container d-flex flex-column flex-md-row justify-content-between">
            <a className="py-2" href="www.dextra.com.br">
              dextra
            </a>
            <a className="py-2 d-none d-md-inline-block">Engajamento</a>
            <a className="py-2 d-none d-md-inline-block">App-like</a>
            <a className="py-2 d-none d-md-inline-block">Offline</a>
            <a className="py-2 d-none d-md-inline-block">Segurança</a>
            <a className="py-2 d-none d-md-inline-block">Javascript</a>
            <a className="py-2 d-none d-md-inline-block">ReactJs</a>
            <a className="py-2 d-none d-md-inline-block">NodeJs</a>
            <a className="py-2 d-none d-md-inline-block">iOS/Android/Web</a>
          </div>
        </nav>

        <div className="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-light">
          <div className="col-md-5 p-lg-5 mx-auto my-5">
            <h1 className="display-4 font-weight-normal">
              Seja Bem vindo {givenName}
            </h1>
            <p className="lead font-weight-normal">
              Você sabia que com pwa, conseguimos monitorar assim como uma
              aplicação web algumas informações do usuário?
            </p>
          </div>
          <div className="product-device box-shadow d-none d-md-block"></div>
          <div className="product-device product-device-2 box-shadow d-none d-md-block"></div>
        </div>
        <div className="d-md-flex flex-md-equal w-100 my-md-3 pl-md-3">
          <div className="jumbotron">
            <p className="lead">Algumas informações sobre seu dispositivo</p>
            <hr className="my-4" />
            <p>Seu sistema operacional é : {osName}</p>
            <p>A versão do seu sistema é: {osVersion}</p>
            {isMobile && (
              <React.Fragment>
                <p>Seu tipo de dispositivo é: {deviceType}</p>
                <p>Vocẽ esta em um dispositivo : {mobileVendor}</p>
                <p>Modelo do seu dispositivo: {mobileModel}</p>
                <p>Seu browser engine: {engineName}</p>
                <p>Sua versão é: {engineVersion}</p>
              </React.Fragment>
            )}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Welcome;
