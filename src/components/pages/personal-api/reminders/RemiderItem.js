import React from "react";

const ReminderItem = ({reminder}) => {

  return (
    <>  
      <div className="dataBox" style={{height: '150px', width: '350px', margin: '10px', display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: 20}}>
        <p>{reminder.title}</p>
      </div>
    </>
  )
}

export default ReminderItem