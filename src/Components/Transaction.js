import React,{useState} from 'react';

const Transaction = (props) => {
  
   const [inp, setinp] = useState({
        text:"",
        kharch:""
   });

   const inpevent=(e)=>{
     setinp({...inp,[e.target.name]:e.target.value})
   }
   const resetInputField = (i) => {
     props.inpData(i)
     setinp({
           text:"",
           kharch:""
     })
  };
 
  return <div>
       <h3>Add new transaction</h3>   
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input type="text" name='text'  value={inp.text} onChange={inpevent} placeholder="Enter text..." />
        </div>
        <div className="form-control">
          <label htmlFor="amount"
            >Amount <br />
            (negative - expense, positive - income) 
            </label >
          <input type="number" name='kharch' value={inp.kharch} onChange={inpevent}  placeholder="Enter amount..." />
        </div>
        <button onClick={()=>resetInputField(inp)}  className="btn">Add transaction</button>
  </div>;
};

export default Transaction;
