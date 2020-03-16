import React from "react";
import "./App.css";


class AdNote extends React.Component {

    
  render() {

        return (
           
            <button className= "NavCircleButtonNote"
            //onClick={() => props.onClickAdd(props.id)}
            type= "submit"
          >
            + Note
          </button>
          
        )
  }
}

export default AdNote;