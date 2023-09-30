import React, { useState } from "react";

const CardItem = ({card}) => {
  const [copied, setCopied] = useState(false)
  
  const copying = () => {
    setCopied(true)
    navigator.clipboard.writeText(card.number)
    setTimeout(() => {
      setCopied(false)
    }, 500);
  }

  return (
    <>    
          <div style={{margin: '10px'}}>
            <img src={card.image} style={{height: '150px' , borderRadius: 15}} alt="Logo" />
            <div>
              <h5>{card.bank} {card.title}</h5>
              <div style={{display: 'flex' , alignItems: 'center'}}>
              <h5 onClick={() => copying()} style={{cursor:'pointer'}}>{card.number} </h5>
              <p style={{marginLeft: '30px', fontSize: 10, color: 'red'}}>{copied && 'Copied'}</p>
              </div>
              <h5>{card.expiry} : {card.cvv}</h5>
            </div>
          </div>
    </>
  )
}

export default CardItem