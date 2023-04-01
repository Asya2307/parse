import { useEffect, useRef, useState } from 'react';
import classes from './Classes.module.scss';
import clsx from 'clsx';

const lettersTest = /^[a-zа-яё()]+$/i;

export const Main = () => {
    const [val, setValue] = useState('');
    const [test, setTest] = useState(true);
    const [disabled, setDisabled] = useState(!localStorage.getItem('string'));

    const input = useRef<any>();

    const sendLocal = () => {
        localStorage.setItem('string', val);
    };
    const resetLocal = () => {
        localStorage.setItem('string', '');
        setValue('');
        input.current.value = '';
    };

    useEffect(() => {
        if (lettersTest.test(val) && val !== '') {
            setDisabled(false);
            setTest(false);
        } else {
            setDisabled(true);
            setTest(true);
        }
    }, [val]);

    return (
        <>
            <div className={classes.row}>
                <input
                    type="text"
                    onChange={(e) => setValue(e.currentTarget.value)}
                    ref={input}
                    className={clsx(classes.input, test && classes.error)}
                />
                <button className={classes.button} disabled={test} onClick={() => sendLocal()}>
                    Отправить результат
                </button>
            </div>
            <button onClick={() => resetLocal()} className={classes.reset} disabled={disabled}>
                Очистить
            </button>
        </>
    );
};
