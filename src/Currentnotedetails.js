import React from "react";
import "./App.css";
import { Link } from 'react-router-dom';



class Currentnotedetails extends React.Component {

    
  render() {

    

        return (
            <div>{this.props.currentNoteDetails}</div>
          
        )
  }
}

export default Currentnotedetails;