import React, { Component } from 'react';
import {Route, Switch, Link} from 'react-router-dom';

import './App.css';
import Nav from './Nav';
import AddFolder from './AddFolder';
import AddNote from './AddNote';
import Addnoteform from './Addnoteform';
import RemoveNote from './RemoveNote';
import Currentnotedetails from './Currentnotedetails';
import Moment from 'react-moment';
import STORE from './STORE'


const newNote = () => {
 
  return {
    newname: "Panda",
    folder: "Spangley"
  }
}



class App extends Component {


  state = {
    currentTabIndex: "b0715efe-ffaf-11e8-8eb2-f2801f1b9fd1",
    currentNoteIndex: "cbc787a0-ffaf-11e8-8eb2-f2801f1b9fd1",
    store: STORE,
    notes: STORE.notes, 
    folders: STORE.folders
    };
   
  
      handleAddNote = (noteName, noteContent, /*noteFolder, */folderId) => {
      console.log(noteName, noteContent, /*noteFolder, */folderId)
  
      const newNotesArray = [
        ...this.state.notes,
        {name: noteName, 
        content: noteContent,
        folderId: folderId},
        ]
  
      /*const newFolder = [
        ...this.state.folders,
        {name: noteFolder,
        id: folderId},
        
      ]*/

      this.setState({
        /*folders: newFolder,*/
        notes: newNotesArray
              })
    };
     
  render() {
     
    const folderButtonClick = (folderId) => {
      this.setState({ currentTabIndex: folderId })
      console.log(this.state.folders)
    }
  
    const noteButtonClick = (id) => {
      this.setState({ currentNoteIndex: id })
      
    }

    const buttons = this.state.folders.map((item, index) =>(
     
      <li className= "folderLi"><button 
      key = {index} 
      className = "folderButton"
      onClick={() => folderButtonClick(item.id)}
      >
        {item.name}
        <span className = "number"> 
        {this.state.notes.filter(num=> num.folderId === item.id).length}
        </span>

         </button>
      </li>))

     
   const folderList = this.state &&
    this.state.folders && this.state.folders.map((item) =>(
             item.name))

   const folderIds = this.state &&
   this.state.folders && this.state.folders.map((item) =>(
                      item.id))

   const currentTabDetail = this.state.notes.filter(num=> num.folderId === this.state.currentTabIndex).map((item) => 
      item)


          
   const noteName = currentTabDetail.map((item, index) => (
      <div className = "noteSummary">
        <ul>
          <li  className= "noteName"><button 
          key = {index}
          className= "noteButton"
          onClick={() => noteButtonClick(item.id)}
          >
                <Link to = "/note-details">
            {item.name}
                </Link>
            <span className= "remove"><RemoveNote/></span> </button>
          </li>
          <li className= "noteLi">Modified <Moment format="D MMM YYYY" withTitle>{item.modified}</Moment> </li>
        </ul>
      </div>
      ))

    const currentNoteDetailArr = this.state.notes.filter(num=> num.id === this.state.currentNoteIndex)

    const currentNoteDetails = 
    
        <div className = "noteSummary">
          <ul>
         
            <li  className= "noteName"><button className= "noteButton"
            >
            {currentNoteDetailArr[0].name}
            <span className= "remove"><RemoveNote/></span> </button>
            </li>
           
            <li className= "noteLi">Modified <Moment format="D MMM YYYY" withTitle> {currentNoteDetailArr[0].modified}</Moment> </li>
            <li className = "content">{currentNoteDetailArr[0].content}</li>
          </ul>
        </div>
          
      return (
        
      <main className="App">
      
       
       <header><Nav /></header>
  
         
          <div className = "folderBox">
          <Link to = '/'>
             {buttons}
          </Link>

           <div><AddFolder/></div>
        
           </div>    

          {this.state && this.state.notes.length && this.state.folders.length && (
          <div className= "noteList">
            <Switch>
             <Link to = '/'>
            {noteName}
            </Link>
            </Switch>
           </div>

          )}
         <div>
          <div><AddNote/></div>
        
        <Switch>
          <Route
          path = "/add-note"
          render = { () =>
          
          <Addnoteform
          folderList = {folderList}
          folderIds = {folderIds}
          onAddItem = {this.handleAddNote}      
          />}/>
        </Switch>


         </div>  
          

          <div className= "noteDetail">
          <Switch>
          <Route
          path = '/note-details/${}'
          render = { () =>
          <Currentnotedetails 
            currentNoteDetails = {currentNoteDetails[0]}
          />}/>
          </Switch>


          </div>
      
      </main>
    );
  }
}

export default App;

