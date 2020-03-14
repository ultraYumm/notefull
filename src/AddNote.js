import React from "react";
import "./App.css";


class AdNote extends React.Component {

    
  render() {

        return (
            <button className= "NavCircleButtonNote"
            //onClick={() => props.onClickAdd(props.id)}
            type='button'
          >
            + Note
          </button>
        )
  }
}

export default AdNote;