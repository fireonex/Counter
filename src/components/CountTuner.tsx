import React, {ChangeEvent} from "react";
import '../App.css'
import {Button} from "./Button";


type CountClickerType = {
    classes: string
    setMaxValue: (maxValue: number) => void
    setMinValue: (minValue: number) => void
    maxValue: number
    minValue: number
    onFocusHandler: () => void
    setCount: (count: number) => void
}


export const CountTuner = ({
                               classes,
                               setMaxValue,
                               setMinValue,
                               minValue,
                               maxValue,
                               onFocusHandler,
                               setCount
                           }: CountClickerType) => {


    const setMaxValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setMaxValue(Number(e.target.value))
    }

    const setMinValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setMinValue(Number(e.target.value))
    }

    const saveButtonHandler = () => {
        setMaxValue(maxValue)
        setMinValue(minValue)
        setCount(minValue)
    }


    return (
        <div className={classes}>
            <div className={'inputWrapper'}>
                <p className={'inputName'}>Max value:</p>
                <input type="number"
                       className={maxValue < 0 ? 'inputErrorStyle' : 'inputStyle'}
                       onChange={setMaxValueHandler}
                       onFocus={() => onFocusHandler()}
                       value={maxValue}
                />
            </div>
            <div className={'inputWrapper'}>
                <p className={'inputName'}>Start value:</p>
                <input type="number"
                       className={minValue < 0 ? 'inputErrorStyle' : 'inputStyle'}
                       onChange={setMinValueHandler}
                       onFocus={() => onFocusHandler()}
                       value={minValue}
                />
            </div>
            <Button name={'set'} classes={'inc-button'} onClick={saveButtonHandler}
                    disabled={maxValue < 0 || minValue < 0}/>
        </div>
    )
}