import React, {ChangeEvent} from "react";
import s from './counter.module.css'
import Button from "./components/Button";

type Props = {
    error: null | string
    max: number
    min: number
    setMaxCount: (value: number) => void
    setMinCount: (value: number) => void
    setSettingModeOff: () => void
    settingMode: boolean
}
// const createClassname = (args: string[]): string => {
//     return args.join(' ')
// }

export const Settings: React.FC<Props> = ({
                                              min,
                                              max,
                                              setMaxCount,
                                              setMinCount,
                                              error,
                                              setSettingModeOff,
                                              settingMode,
                                              ...restProps
                                          }) => {

    const changeMaxHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setMaxCount(Number(e.currentTarget.value))
    }
    const changeMinHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setMinCount(Number(e.currentTarget.value))
    }
    const inputClassName = s.input + " " + (error && s.error)
    console.log(inputClassName)
    return <div className={s.block + " " + s.setting}>
        {error && <h3 className={s.error}>{error}</h3>}
        <div>
            <div className={s.input_container}>
                max: <input className={inputClassName} size={50} value={max} onChange={changeMaxHandler}
                            type={"number"}/>
            </div>
            <div className={s.input_container}>
                min: <input className={inputClassName} size={30} value={min} onChange={changeMinHandler}
                            type={"number"}/>
            </div>
        </div>
        <Button disabled={!settingMode || !!error} value={"Save"} onClick={setSettingModeOff}/>

    </div>
}
