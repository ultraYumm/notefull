import React from 'react';
import './App.css';
import Notesimportant from './Notesimportant';

class Importanttab extends React.Component {
  
 
render() {

         return (        
            <div>
          <h2 className= "noteFolderTitle">{this.props.folderImportantName}</h2>
          <li>
           {this.props.notesImportantDetail.map(item => (<Notesimportant
          key = {item.id}
          name = {item.name}
          content = {item.content}
          modified = {item.modified}/>))}
          </li>
        </div>
        );
    

    }
}
    
    export default Importanttab;
