import React from "react";
import "./App.css";





class Folderbuttons extends React.Component {

    
  render() {

    const folderButtonClick = (folderId) => {
        this.setState({ currentTabIndex: folderId })
        console.log(this.props.folders)
      }
      //console.log(this.state.store.folders)
  
          
    const buttons = this.props.folders.map((item, index) =>(
     
        <li className= "folderLi"><button 
        key = {index} 
        className = "folderButton"
        onClick={() => folderButtonClick(item.id)}
        >
          {item.name}
          <span className = "number"> 
          {this.props.notes.filter(num=> num.folderId === item.id).length}
          </span>
  
           </button>
        </li>))
  


        return (

          
        <div>            
        {buttons}    
       </div>

        );
      }

    }

    


export default Folderbuttons;