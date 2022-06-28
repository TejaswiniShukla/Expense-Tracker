import React,{useState} from 'react';

import History from './Components/History';
import Balance from './Components/Balance';
import "./App.css"
import IncomeExpenses from './Components/IncomeExpenses';
import Transaction from './Components/Transaction';

const App = () => {
  const [data, setdata] = useState([]);
    
  const inpdata=(dat)=>{
    const copydata=[...data]
    copydata.push(dat)
    setdata(copydata)
  }
 
 
  return <div>
    <div className='container'>
      
      <h1>Expense-Tracker</h1>
      <hr/>
             <Balance totaldata={data}/>
             <IncomeExpenses expenseincome={data}/>
             <History historydata ={data}/>
             <Transaction inpData={inpdata}/>
    </div>
    <div>
       
    </div>
  </div>;
};

export default App;
