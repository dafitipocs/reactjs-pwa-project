import React from "react";

class Teste extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
    this.testarBotao = this.testarBotao.bind(this);
  }

  testarBotao(e, parametro) {
    console.log(e);
    console.log(parametro);
  }

  render() {
    return (
      <div>
        <button onClick={this.testarBotao.bind(this, "10px")}>clicar</button>
      </div>
    );
  }
}

export default Teste;
