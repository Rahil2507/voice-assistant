import React from "react";

const NoteItem = ({note}) => {

  return (
    <>
      <div className="dataBox" style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '250px', width: '350px', borderRadius: 20, margin: '10px' , padding: '20px'}} >
          <h5 style={{position: 'absolute', top: '10px', fontSize: 20, textDecorationLine: 'underline'}}>{note.title}</h5>
          <p>{note.description}</p>
      </div>
    </>
  )
}

export default NoteItem