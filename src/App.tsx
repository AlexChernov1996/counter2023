import React, {useEffect, useState} from 'react';
import './App.css';
import Counter from "./Counter";
import {Settings} from "./Settings";

type CountType = {
    value: number
    min: number
    max: number
}

function App() {
    let [count, setCount] = useState<CountType>({value: 0, min: 0, max: 5})
    let [error, setError] = useState<null | string>(null)
    let [settingMode, setSettingMode] = useState<boolean>(false)
    // const checkSettingError = ()=>{
    //      if(count.max <= count.min){
    //          setError(()=>"Minimal value cannot be lower than maximum value! ")
    //      }
    // }
    useEffect(() => {
        let startCountAsString = localStorage.getItem("count")
        if (startCountAsString) {
            setCount(JSON.parse(startCountAsString))
        }
    }, [])
    useEffect(() => {
        localStorage.setItem("count", JSON.stringify(count))
    }, [count])
    useEffect(() => {
        let startSettingModeAsString = localStorage.getItem("settingMode")
        if (startSettingModeAsString) {
            setSettingMode(JSON.parse(startSettingModeAsString))
        }
    }, [])
    useEffect(() => {
        localStorage.setItem("settingMode", JSON.stringify(settingMode))
    }, [settingMode])

    const setSettingModeOff = () => {
        setCount({...count, value: count.min})
        setSettingMode(false)
    }
    const incValue = () => {
        setCount((count) => ({...count, value: count.value + 1}))
    }
    const decValue = () => {
        setCount({...count, value: count.value - 1})
    }
    const resetValue = () => {
        setCount({...count, value: count.min})
    }
    const changeMaxSetting = (value: number) => {
        setSettingMode(true)
        setError(null)
        setCount({...count, max: value})
        value <= count.min && setError("Minimal value cannot be lower than maximum value!")
        //checkSettingError() - не работает. мб из-за асинхронности setState(спросить на сапе)
    }
    const changeMinSetting = (value: number) => {
        setSettingMode(true)
        setError(null)
        setCount({...count, min: value})
        value >= count.max && setError("Minimal value cannot be lower than maximum value!")
        value < 0 && setError("Minimal value cannot be lower than 0!")
        //checkSettingError() - не работает. мб из-за асинхронности setState(спросить на сапе)
    }

    return (
        <div className="App">
            <Counter settingMode={settingMode} resetValue={resetValue} decValue={decValue}
                     incValue={incValue}  {...count}/>
            <Settings settingMode={settingMode} setSettingModeOff={setSettingModeOff} error={error}
                      setMinCount={changeMinSetting} setMaxCount={changeMaxSetting} min={count.min} max={count.max}/>
        </div>
    );
}

export default App;
