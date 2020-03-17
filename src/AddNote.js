import React from "react";
import "./App.css";
import { Link } from 'react-router-dom';
import Addnoteform from './Addnoteform';



class AdNote extends React.Component {

    
  render() {

        return (
            <button className= "NavCircleButtonNote"
            type= "submit"
             >
            + Note
             <Link to = {`/add-note/`}>
              <Addnoteform
               folderList = {this.props.folderList}
               folderIds = {this.props.folderIds}
               onAddItem = {this.props.handleAddNote}/>
               </Link>
            </button>
          
        )
  }
}

export default AdNote;