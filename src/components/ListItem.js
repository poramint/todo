import React, { Component } from "react";

class ListItem extends Component {

 render() {
   return (
       <div>
      
       {this.props.todos.map((item, index) => (
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
        <input 
        onChange = {() => this.props.onCheckbox(index, item.id)}
        type="checkbox" 
        checked={item.complete}/>
        {item.complete ? <s>{item.name}</s> : item.name}
      </div>
       ))}
   </div>
   );
 }
}

export default ListItem;