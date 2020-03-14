import React from 'react';




export default function RemoveNotes(props) {
  return (
       <button className = "removeButton"
        //onClick={() => props.onClickDelete(props.id)}
        type='button'
      >
        remove <span className="glyphicon glyphicon-trash"></span>
      </button>
    
  )
}

RemoveNotes.propTypes = {
  onClickDelete: () => {}
}