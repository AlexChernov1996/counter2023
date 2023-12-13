import React, {ChangeEvent} from "react";
import s from './counter.module.css'
import Button from "./components/Button";

type Props = {
    error : null|string
    max: number
    min: number
    setMaxCount: (value:number) => void
    setMinCount: (value:number) => void
    //checkError:()=>void
}
export const Settings:React.FC<Props>=({min, max, setMaxCount,setMinCount, error,...restProps})=>{

    const changeMaxHandler = (e:ChangeEvent<HTMLInputElement>)=>{
       setMaxCount(Number(e.currentTarget.value))

    }
    const changeMinHandler = (e:ChangeEvent<HTMLInputElement>)=>{
        setMinCount(Number(e.currentTarget.value))

    }
    return <div className={s.block+" "+ s.setting}>
        {error && <span className={s.error}>{error}</span>}
        <div >
            <div className={s.input}>
               max: <input value={max} onChange={changeMaxHandler} type={"number"}/>
            </div>
            <div className={s.input}>
               min: <input value={min} onChange={changeMinHandler} type={"number"}/>
            </div>
        </div>
        <Button value={"Save"} onClick={()=>{}}/>

    </div>
}
