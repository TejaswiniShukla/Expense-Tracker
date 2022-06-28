import React from 'react';

const IncomeExpenses = (props) => {
    const totaldata=props.expenseincome.map((e,i)=>{ 
      return parseInt(e.kharch)     
    })
    var minusamt=0
    var plusamt=0
    totaldata.forEach((dt)=>{
        if(dt>0){
            plusamt+=dt
        }else{
          minusamt+=dt
        }       
    })
   
  

  return <div>
       <div className="inc-exp-container">
        <div>
          <h4>Income</h4>
          <p id="money-plus" className="money plus">+${plusamt}</p>
        </div>
        <div>
          <h4>Expense</h4>
          <p id="money-minus" className="money minus">-${minusamt}</p>
        </div>
      </div>
  </div>;
};

export default IncomeExpenses;
