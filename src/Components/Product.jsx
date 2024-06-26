import React from 'react';

export default function Product(props) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '10px' }}>
      <div>
        <h2>{props.name} price: {props.price}</h2>
      </div>
      <button onClick={()=>{props.addToCart(props.name,props.price)}} style={{ marginLeft: '20px' }}>+</button>
    </div>
  );
}
