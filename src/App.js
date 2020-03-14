import React, { Component } from 'react';
import './App.css';
import Nav from './Nav';
import AddFolder from './AddFolder';
import AddNote from './AddNote';
//import FolderList from './FolderList';
//import Notessummary from './Notessummary';
//import NotesDetail from './NotesDetail';
//import Importanttab from './Importanttab';
import RemoveNote from './RemoveNote';
import Moment from 'react-moment';




class App extends Component {

  static defaultProps = {
    store: {
      folders: [],
      notes: [],
      }
  };

  state = {
    currentTabIndex: 0,
    currentNoteIndex: 0,
  };

  

  render() {
    
    const { store } = this.props
    

    const handleButtonClick = (index) => {
      this.setState({ currentTabIndex: index })
    }

    const buttons = store.folders.map((item, index) =>(
     
      <li className= "folderLi"><button 
      key = {index} 
      className = "folderButton"
      onClick={handleButtonClick}
      >
        {item.name}
        <span className = "number">
        {store.folders.length}</span>  
      </button>
      </li>))

      
    const currentTabDetail = store.notes.filter(num=> num.folderId === store.folders[this.state.currentTabIndex].id).map((item) => 
      item)
    
    const noteName = currentTabDetail.map((item) => (
      <div className = "noteSummary">
        <ul>
      <li  className= "noteName">
        {item.name}
        <span className= "remove"><RemoveNote/></span>
      </li>
      <li className= "noteLi">Modified <Moment format="D MMM YYYY" withTitle>{item.modified}</Moment> </li>
      </ul>
      </div>
      ))



      return (
      <main className="App">
       
       <header><Nav /></header>

       <div className = "folderBox">
         {buttons}
       <div><AddFolder/></div> 
       </div>
       
     

       {store && store.notes.length && store.folders.length && (
       <div className = "noteSummary">{noteName}</div>
       )}

       <div><AddNote/></div>
       
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
