import React from "react";
import "./App.css";
import { Link } from 'react-router-dom';



class AdNote extends React.Component {

    
  render() {

        return (
            <button className= "NavCircleButtonNote"
            type= "submit"
             >
             <Link to = "/add-note" style ={{ color: 'black'}}>
             + Note
              </Link>
            </button>
          
        )
  }
}

export default AdNote;