import React, { Component } from "react";
import axios from "axios";
import Main from "../templates/Main";

import { userCrud } from "../utils/constsApp";

const headerProps = {
  icon: "users",
  title: "Usuários",
  subtitle: "Cadastro de usuários: Incluir, Listar, Alterar e Excluir",
};

export default class UserCrud extends Component {
  state = { ...userCrud.initialState };

  clear() {
    this.setState({ user: userCrud.initialState.user });
  }

  save() {
    const user = this.state.user;
    const method = user.id ? "put" : "post";
    const url = user.id ? `${userCrud.baseUrl}/${user.id}` : userCrud.baseUrl;
    axios[method](url, user).then((resp) => {
      const list = this.getUpdatedList(resp.data);
      this.setState({ user: userCrud.initialState.user, list });
    });
  }

  getUpdatedList(user) {
    const list = this.state.list.filter((u) => u.id !== user.id);
    list.unshift(user); // coloca na primeira posição
    return list;
  }

  render() {
    return <Main {...headerProps}>Cadastro de Usuário</Main>;
  }
}
