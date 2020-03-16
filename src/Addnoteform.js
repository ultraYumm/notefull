import React from "react";
import "./App.css";


class Addnoteform extends React.Component {



  onSubmitForm = (e) => {
    e.preventDefault()
      this.props.onAddItem(e.target.itemToAdd.value, e.target.contentToAdd.value, e.target.folderToGo.value)
  }
    
  render() {
    
    const options = this.props.folderList.map(item => {return item})


    return (
          

          <form className = "noteList" onSubmit={this.onSubmitForm}>
            <h2>Create a note</h2>
          <ul className = "inputBox">

          <li className = "inputItems">
          <label>Name</label>
        
          <input
            name='itemToAdd'
            type='text'
            aria-label='name'
           />
           </li>

           <li className = "inputItems">
           <label>Content</label>
           <input
            name = 'contentToAdd'
            type='text'
            aria-label='content'
          />
            </li>

          <li className = "inputItems">   
          <label>Folder</label>
            <select 
            id="folder" 
            name="folderToGo"
            //onChange={e => this.changeSelection(e.target.value)}
            >
            <option>...</option>
            <option value = "Important"> {options[0]}</option>
            <option value = "Super"> {options[1]}</option>
            <option value = "Spangley"> {options[2]}</option>
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