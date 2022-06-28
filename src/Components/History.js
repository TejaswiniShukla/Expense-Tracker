import React,{useState} from 'react';

const History = (props) => {
  
   const [show, setshow] = useState([]);
   const dataforshow=props.historydata.map((dats,i)=>{
         return  <li key={i} className="minus">{`${dats.text}`}<span>${`${dats.kharch}`}</span><button className="delete-btn">x</button>
         </li> 
   })

   

  return <div> 
      <h3>History</h3>
      <ul id="list" className="list">
          {dataforshow}
      </ul>

  </div>;
};

export default History;
