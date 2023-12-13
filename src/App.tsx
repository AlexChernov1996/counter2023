import React, {ChangeEvent, useState} from 'react';
import './App.css';
import Counter from "./Counter";
import {Settings} from "./Settings";

function App() {
     let [count, setCount] = useState({value:0,min:0,max:10})
     let [error, setError] = useState<null|string>(null)
    const checkSettingError = ()=>{
         if(count.max <= count.min){
             setError(()=>"Minimal value can not be lower then maximum value! ")
         }
    }
    const incValue = ()=>{
         setCount({...count,value: count.value+1})
    }
    const decValue = ()=>{
        setCount({...count,value: count.value-1})

    }
    const resetValue = ()=>{
        setCount({...count,value: count.min})
    }
    const changeMaxSetting = (value:number )=>{
         setError(null)
         setCount((prev)=>({...prev,max: value}))
        value <=count.min && setError("Minimal value can not be lower then maximum value!")

        //checkSettingError() - не работает. мб из-за асинхронности setState(спросить на сапе)
     }
    const changeMinSetting = (value:number )=>{
        setError(null)
        setCount((prev)=> ({...prev,min: value}))
         value >=count.max && setError("Minimal value can not be lower then maximum value!")
        //checkSettingError() - не работает. мб из-за асинхронности setState(спросить на сапе)
    }
  return (
    <div className="App">
      <Counter resetValue={resetValue} decValue={decValue} incValue={incValue}  {...count}/>
        <Settings  error={error} setMinCount={changeMinSetting} setMaxCount={changeMaxSetting} min={count.min} max={count.max}/>
    </div>
  );
}

export default App;
