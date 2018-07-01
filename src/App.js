import React, { Component } from "react";
import FormSubmit from "./components/FormSubmit";
import ListItem from "./components/ListItem";
import List from "./components/List";
import HeaderComponents from "./components/HeaderComponents";
import Axios from "axios";
import { checkServerIdentity } from "tls";

const URL = "https://poramint-server.herokuapp.com";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      message: ""
    };

    this.onChangeMessage = this.onChangeMessage.bind(this);
    this.onSubmitMessage = this.onSubmitMessage.bind(this);
    this.onCheckbox = this.onCheckbox.bind(this);
  }

  componentDidMount = () => {
    Axios.get(URL + "/todos").then(response => {
      this.setState({ todos: response.data });
    });
  };

  onChangeMessage(e) {
    this.setState({ message: e.target.value });
  }
  onSubmitMessage(e) {
    // ป้องกันเปลี่ยนหน้า
    e.preventDefault();
    Axios.post(URL + "/todos", {
      name: this.state.message,
      complete: false
    }).then(response => {
      let oldState = this.state.todos;
      oldState.push(response.data);
      this.setState({ todos: oldState });
    });
  }

  onCheckbox(index, id) {
    let check = this.state.todos[index].complete;
    Axios.patch(URL + "/todos/" + id, { complete: !check }).then(response => {
      let oldState = this.state.todos;
      oldState[index].complete = !check;
      this.setState({ todos: oldState });
    });
  }

  render() {
    return (
      <div
        style={{
          borderColor: "#e12c6a",
          borderWidth: 2,
          borderStyle: "solid",
          borderRadius: 4,
          width: 1024,
          margin: "auto",
          marginTop: 20
        }}
      >
        <HeaderComponents />
        <List todos={this.state.todos} onCheckbox={this.onCheckbox} />
        <FormSubmit
          onChangeMessage={this.onChangeMessage}
          onSubmitMessage={this.onSubmitMessage}
        />
      </div>
    );
  }
}
export default App;