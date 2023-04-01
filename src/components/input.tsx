import clsx from 'clsx';
import { FC, useEffect, useRef, useState } from 'react';
import classes from './Classes.module.scss'


interface Props {
    currentValue: string
}

export const Input:FC<Props> = ({currentValue}) => {

    const [current, setCurrent] = useState('')
    const [success, setSuccess] = useState(false)

    useEffect(() => {
        current === currentValue ? setSuccess(true) : setSuccess(false)
    }, [current])

    console.log(current, currentValue)

    return (
      <>
      <input type="text" disabled={success}  onChange={(e) => setCurrent(e.currentTarget.value)} className={clsx(classes.input, classes.small, success && classes.success)} />
      </>
    );
}

