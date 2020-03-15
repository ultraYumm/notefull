import React from "react";
import "./App.css";


class Addnoteform extends React.Component {

    
  render() {
    
    const options = this.props.folderList.map(item => {return item})


    return (
          

          <form className = "noteList">
            <h2>Create a note</h2>
          <ul className = "inputBox">

          <li className = "inputItems">
          <label>Name</label>
          <input
            type='text'
            aria-label='name'
           />
           </li>

           <li className = "inputItems">
           <label>Content</label>
           <input
            type='text'
            aria-label='content'
          />
            </li>

          <li className = "inputItems">   
          <label>Folder</label>
            <select 
            id="folder" 
            name="folder"
            //onChange={e => this.changeSelection(e.target.value)}
            >
            <option>...</option>
            {options}
          </select>
          </li>
            
          <li className = "inputItems"> 
            <button className= "addNoteFormButton"
            //onClick={() => props.onClickAdd(props.id)}
            type= "submit"        
          >
            Add note
          </button>
          </li>
          
          </ul>

          </form>
        )
  }
}

export default Addnoteform;