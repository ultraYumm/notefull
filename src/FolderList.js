import React from "react";
import "./App.css";




class FolderList extends React.Component {

    
  render() {


        return (
        <ul>            
              
        <li className= "folderLi"><button className = "folderButton" >{this.props.name}<span className = "number">{this.props.length}</span></button></li>
        
        
       </ul>

        );
      }

    }

    


export default FolderList;
