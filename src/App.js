import React, { Component } from 'react';
import './App.css';
import Nav from './Nav';
import AddFolder from './AddFolder';
import AddNote from './AddNote';
import Addnoteform from './Addnoteform';
//import Notessummary from './Notessummary';
//import NotesDetail from './NotesDetail';
//import Importanttab from './Importanttab';
import RemoveNote from './RemoveNote';
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
  
  

  handleAddNote = (noteName, noteContent, noteFolder) => {
    const newNoteName = [
      ...this.state.notes,
      {name: noteName}
    ]
     //will need to assign an ID to the new note

     const newNoteContent = [
      ...this.state.content,
      {content: noteContent}
    ]


    const newNoteFolder = [
      ...this.state.folders,
      {name: noteFolder}
    ]
    //will need to assign an ID to the new folder

   
    this.setState({
      store: {
       folders:{
          name: this.newNote
        },
        notes: {
          name: this.newNoteName,
          content: this.newNoteContent          
        }
      }
    })
  };

  render() {
    
    const { store } = this.state
    
    const folderButtonClick = (folderId) => {
      this.setState({ currentTabIndex: folderId })
      
    }

    const noteButtonClick = (id) => {
      this.setState({ currentNoteIndex: id })
      
    }

    const buttons = store.folders.map((item, index) =>(
     
      <li className= "folderLi"><button 
      key = {index} 
      className = "folderButton"
      onClick={() => folderButtonClick(item.id)}
      >
        {item.name}
        <span className = "number">
        {store.folders.length}</span>  
      </button>
      </li>))

    const folderList = store &&
    store.folders && store.folders.map((item) =>(
             item.name))

    const currentTabDetail = store.notes.filter(num=> num.folderId === this.state.currentTabIndex).map((item) => 
      item)
    
    const noteName = currentTabDetail.map((item, index) => (
      <div className = "noteSummary">
        <ul>
          <li  className= "noteName"><button 
          key = {index}
          className= "noteButton"
          onClick={() => noteButtonClick(item.id)}
          >
            {item.name}
            <span className= "remove"><RemoveNote/></span> </button>
          </li>
          <li className= "noteLi">Modified <Moment format="D MMM YYYY" withTitle>{item.modified}</Moment> </li>
        </ul>
      </div>
      ))

      const currentNoteDetailArr = store.notes.filter(num=> num.id === this.state.currentNoteIndex)

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
         {buttons}
       <div><AddFolder/></div> 
       </div>    

       {store && store.notes.length && store.folders.length && (
       <div className= "noteList">{noteName}</div>
       )}

      <div><Addnoteform
      folderList = {folderList}
      onAddItem = {this.handleAddNote}

      /></div>
      <div><AddNote/></div>

      {store && store.notes.length && store.folders.length && (
       <div className= "noteDetail">{currentNoteDetails}</div>
       )}
       
      </main>
    );
  }
}

export default App;


/*<div className = "folderBox">
{store.folders.map(item =>(
   <FolderList
   key = {item.id}
   name = {item.name}
   length = {store.folders.length}       
 />
 ))}
  <div><AddFolder/></div>        
</div>*/


/*       
       
<div className = "noteDetail">
<Importanttab
 folderImportantName =  {store.folders[this.state.currentTabIndex].name}
 notesImportantDetail = {store.notes.filter(num=> num.folderId === store.folders[this.state.currentTabIndex].id).map((item) => 
   item)}
  />
<div><AddFolder/></div>        
</div>

<div><AddNote/></div>

<div className = "noteSummary">
{store.notes.map(note =>(
<Notessummary
key = {note.id}
name = {note.name}
modDate = {note.modified}
folders = {note.folderId}

/> 
))}
</div>







<div className = "tab">
<NotesDetail
folderIds =  {store.folders.map((item) => item.id)}
folderImportantId =  {store.folders[0].id}
folderSuperId =  {store.folders[1].id}
folderSpangleyId =  {store.folders[2].id}
folderImportantName =  {store.folders[0].name}
folderSuperName =  {store.folders[1].name}
folderSpangleyName =  {store.folders[2].name}
notesImportantDetail = {store.notes.filter(num=> num.folderId === store.folders[0].id).map((item) => 
item)}
notesSuperDetail = {store.notes.filter(num=> num.folderId === store.folders[1].id)
.map((item) => 
item)}
notesSpangleyDetail = {store.notes.filter(num=> num.folderId === store.folders[2].id)
.map((item) => 
item)}
   />
</div>

*/
