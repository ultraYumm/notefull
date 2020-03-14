import React from 'react';
import './App.css';


import Notesimportant from './Notesimportant';
import Notesspangley from './Notesspangley';
import Notessuper from './Notessuper';


class NotesDetail extends React.Component {
  
 
render() {

         return (        
        <ul>
         <ul>
          <h2 className= "noteFolderTitle">{this.props.folderImportantName}</h2>
          <li>
           {this.props.notesImportantDetail.map(item => (<Notesimportant
          key = {item.id}
          name = {item.name}
          content = {item.content}
          modified = {item.modified}/>))}
          </li>
        </ul>

        <ul>
        <h2 className= "noteFolderTitle">{this.props.folderSuperName}</h2>
        <li>
         {this.props.notesSuperDetail.map(item => (<Notessuper
        key = {item.id}
        name = {item.name}
        content = {item.content}
        modified = {item.modified}/>))}
        </li>
      </ul>
      
       <ul>
        <h2 className= "noteFolderTitle">{this.props.folderSpangleyName}</h2>
        <li>
         {this.props.notesSpangleyDetail.map(item => (<Notesspangley
        key = {item.id}
        name = {item.name}
        content = {item.content}
        modified = {item.modified}/>))}
        </li>
      </ul>
      </ul>
            
        );
    

    }}
    
    export default NotesDetail;