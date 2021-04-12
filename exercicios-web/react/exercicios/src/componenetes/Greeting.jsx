import React, { Component } from "react";

export default class Greeting extends Component {
  // O componente só é atualizado quando o state é modificado
  state = {
    type: this.props.type,
    name: this.props.name,
  };

  setType(e) {
    // let i = 1;
    // setInterval(() => this.setState({ type: ++i }), 1000);
    this.setState({ type: e.target.value });
  }

  setName(e) {
    this.setState({ name: e.target.value });
  }

  render() {
    //   this.props é somente leitura
    const { type, name } = this.state;
    return (
      <div>
        <h1>
          {type} {name}!
        </h1>
        <hr />
        <input
          type="text"
          placeholder="Tipo..."
          value={type}
          onChange={(e) => this.setType(e)}
        />
        <input
          type="text"
          placeholder="Nome..."
          value={name}
          onChange={(e) => this.setName(e)}
        />
      </div>
    );
  }
}
