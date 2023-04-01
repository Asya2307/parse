import { useState } from 'react';
import { Input } from './input';
import classes from './Classes.module.scss'

const START = '(';
const END = ')';

export const Result = () => {
    const string = localStorage.getItem('string');
    const [result, setResult] = useState(string);

    window.addEventListener('storage', () => {
        setResult(localStorage.getItem('string'));
    });

    const map = new Array();

    result &&
        Array.from(result).filter((i, index) => {
            i === START && map.push(index + 1);
        });

    return (
        <>
            <span className={classes.title}>Впишите ответ:</span>{result ? (
                Array.from(result).map((i, index) => {
                    if (map.includes(index)) {
                        return <Input currentValue={i} key={index} />;
                    } else if (i !== START && i !== END) {
                        return i;
                    }

                    return;
                })
            ) : (
                <span>Пусто!</span>
            )}
        </>
    );
};
