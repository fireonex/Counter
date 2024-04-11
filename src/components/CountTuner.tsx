import React, {ChangeEvent} from "react";
import '../App.css'
import {Button} from "./Button";


type CountClickerType = {
    classes: string
    setMaxValue: (maxValue: number) => void
    setMinValue: (minValue: number) => void
    setTemporaryMaxValue: (temporaryMaxValue: number) => void;
    setTemporaryMinValue: (temporaryMinValue: number) => void;
    temporaryMaxValue: number
    temporaryMinValue: number
    onFocusHandler: () => void
    setCount: (count: number) => void
}


export const CountTuner = ({
                               classes,
                               setMaxValue,
                               setMinValue,
                               setTemporaryMaxValue,
                               setTemporaryMinValue,
                               temporaryMaxValue,
                               temporaryMinValue,
                               onFocusHandler,
                               setCount
                           }: CountClickerType) => {


    const setMaxValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTemporaryMaxValue(Number(e.target.value))
    }

    const setMinValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTemporaryMinValue(Number(e.target.value))
    }

    const saveButtonHandler = () => {
        setMaxValue(temporaryMaxValue)
        setMinValue(temporaryMinValue)
        setCount(temporaryMinValue)

        localStorage.setItem('counterMaxValue', JSON.stringify(temporaryMaxValue));
        localStorage.setItem('counterMinValue', JSON.stringify(temporaryMinValue));
    }


    return (
        <div className={classes}>
            <div className={'inputWrapper'}>
                <p className={'inputName'}>Max value:</p>
                <input type="number"
                       className={temporaryMaxValue < 0 ? 'inputErrorStyle' : 'inputStyle'}
                       onChange={setMaxValueHandler}
                       onFocus={() => onFocusHandler()}
                       value={temporaryMaxValue}
                />
            </div>
            <div className={'inputWrapper'}>
                <p className={'inputName'}>Start value:</p>
                <input type="number"
                       className={temporaryMinValue < 0 ? 'inputErrorStyle' : 'inputStyle'}
                       onChange={setMinValueHandler}
                       onFocus={() => onFocusHandler()}
                       value={temporaryMinValue}
                />
            </div>
            <Button name={'set'} classes={'inc-button'} onClick={saveButtonHandler}
                    disabled={temporaryMaxValue < 0 || temporaryMinValue < 0}/>
        </div>
    )
}