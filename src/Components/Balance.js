import React from 'react';

const Balance = (props) => {  
  const totaldata=props.totaldata.map((e,i)=>{ 
    return parseInt(e.kharch)     
  })
  var kharchamt=0
  totaldata.forEach((dt)=>{
       kharchamt+=dt
  })
  return <div>
       <h4>Your Balance</h4>
       <h2  id="balance">${kharchamt}</h2></div>;
       
};

export default Balance;
