import React from 'react';
import s from './button.module.css'

type Props = {
    value: string
    onClick: () => void
    disabled?: boolean
}
const Button: React.FC<Props> = ({value, onClick, disabled, ...restProps}) => {
    return (
        <button disabled={disabled} onClick={onClick} className={s.btn}>{value}</button>
    );
};

export default Button;
