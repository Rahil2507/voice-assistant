import React, { useState } from "react";

const DocumentItem = ({document}) => {

  const [imageDimension, setImageDimension] = useState({
    width: '250px',
    height: '150px'
  })

  const imageStyle = { width: imageDimension.width ,height: imageDimension.height , borderRadius: 5 , objectFit: 'fill', cursor: 'pointer', }

  return (
    <>
      <div style={{marginBottom: '10px', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>  
        <div style={{height: '165px', width: '270px', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
          <img  src={document.image} onClick={() => {window.open(document.image)}} style={imageStyle} alt="Logo" onMouseEnter={() => {setImageDimension({width: '270px', height: '165px'})}}  onMouseLeave={() => {setImageDimension({width: '250px', height: '150px'})}} />
        </div>
        <h5>{document.title}</h5>
      </div>
    </>
  );
};

export default DocumentItem;
