import React, { Component } from "react";
import ListItems from "./ListItem";


class List extends Component {

 render() {
   return (
    <div
    style={{
      padding: 2,
      height: 400,
      overflow: "scroll",
      overflowX: "hidden"
    }}
  >
    <ListItems todos={this.props.todos} 
    onCheckbox = {this.props.onCheckbox}/>
  </div>
);
}
}
export default List;