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
}


export const CountTuner = ({classes,
                               setMaxValue,
                               setMinValue,
                               setTemporaryMaxValue,
                               setTemporaryMinValue,
                               temporaryMaxValue,
                               temporaryMinValue}:CountClickerType) => {


    const setMaxValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTemporaryMaxValue(Number(e.target.value))
    }

    const setMinValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTemporaryMinValue(Number(e.target.value))
    }

    const saveButtonHandler = () => {
        setMaxValue(temporaryMaxValue)
        setMinValue(temporaryMinValue)
    }

    //{temporaryMaxValue < 0 ? 'inputErrorStyle' : 'inputStyle'}

    return (
        <div className={classes}>
            <div className={'inputWrapper'}>
                <p className={'inputName'}>Max value:</p>
                <input type="number"
                       className={temporaryMaxValue < 0 ? 'inputErrorStyle' : 'inputStyle'}
                       onChange={setMaxValueHandler}
                />
            </div>
            <div className={'inputWrapper'}>
                <p className={'inputName'}>Start value:</p>
                <input type="number"
                       className={temporaryMinValue < 0 ? 'inputErrorStyle' : 'inputStyle'}
                       onChange={setMinValueHandler}
                />
            </div>
            <Button name={'set'} classes={'inc-button'} onClick={saveButtonHandler}
                    disabled={temporaryMaxValue < 0 || temporaryMinValue < 0}/>
        </div>
    )
}