import React from 'react';
import Button from './components/Button';
import s from './counter.module.css'

type Props = {
    value:number
    min:number
    max:number
    incValue:()=>void
    decValue:()=>void
    resetValue:()=>void
}
const Counter: React.FC<Props> = ({value,min,max, incValue, decValue,resetValue}) => {
    return (
        <div className={s.block + " " + s.counter}>
            <div className={s.display + " " + (value === max && s.max)}>
               <h1 > {value}</h1>
            </div>
            <div className={s.btns}>
            <Button disabled={max === value} onClick={incValue} value={"+"} />
            <Button disabled={min === value} onClick={decValue} value={"-"}/>
            <Button  onClick={resetValue} value={"Reset"}/>
            </div>
        </div>
    );
};

export default Counter;
