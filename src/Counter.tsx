import React from 'react';
import Button from './components/Button';
import s from './counter.module.css'

type Props = {
    value: number
    min: number
    max: number
    incValue: () => void
    decValue: () => void
    resetValue: () => void
    settingMode: boolean
}
const Counter: React.FC<Props> = ({settingMode, value, min, max, incValue, decValue, resetValue}) => {
    return (
        <div className={`${s.block} ${s.counter}`}>
            {settingMode
                ? <h1>Save settings</h1>
                : <>
                    <div className={s.display + " " + (value === max && s.max)}>
                        <h1> {value}</h1>
                    </div>
                    <div className={s.btns}>
                        <Button disabled={max === value} onClick={incValue} value={"+"}/>
                        <Button disabled={min === value} onClick={decValue} value={"-"}/>
                        <Button disabled={min === value} onClick={resetValue} value={"Reset"}/>
                    </div>
                </>
            }

        </div>
    );
};

export default Counter;
