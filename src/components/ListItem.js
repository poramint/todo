import React, { Component } from "react";

class ListItem extends Component {
 constructor(props) {
   super(props);
   this.state = {
    todo: [
        {id:1, name: "shopping", complete: false},
        {id:2, name: "swiming", comolete: false}
    ]
 };
}
 render() {
   return (
       <div>
      
       {this.state.todo.map(item => (
        <div
        key={item.id}
        style={{
          backgroundColor: "#fefefe",
          borderColor: "#ccc",
          borderWidth: 1,
          borderStyle: "solid",
          borderRadius: 5,
          margin: 2,
          padding: 5,
          paddingTop: 10,
          paddingBottom: 19
        }}
      >
        <input type="checkbox" />
        {item.name}
      </div>
       ))}
   </div>
   );
 }
}

export default ListItem;