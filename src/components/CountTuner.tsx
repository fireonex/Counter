import React, {ChangeEvent} from "react";
import '../App.css'
import {Button} from "./Button";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../store";
import {CounterState, SaveValuesAC, UpdateMaxValueAC, UpdateMinValueAC} from "../CounterReducers";


type CountClickerType = {
    classes: string
    onFocusHandler: () => void
}


export const CountTuner = ({classes, onFocusHandler}: CountClickerType) => {

    let countState = useSelector<AppRootStateType, CounterState>(state => state.count)
    let dispatch = useDispatch()


    const updateMaxValue = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(UpdateMaxValueAC(Number(e.currentTarget.value)))
    }

    const updateMinValue = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(UpdateMinValueAC(Number(e.currentTarget.value)))
    }

    const saveValues = () => {
        dispatch(SaveValuesAC(countState.maxValue, countState.minValue))
    }


    return (
        <div className={classes}>
            <div className={'inputWrapper'}>
                <p className={'inputName'}>Max value:</p>
                <input type="number"
                       className={countState.maxValue < 0 ? 'inputErrorStyle' : 'inputStyle'}
                       onChange={updateMaxValue}
                       onFocus={() => onFocusHandler()}
                       value={countState.maxValue}
                />
            </div>
            <div className={'inputWrapper'}>
                <p className={'inputName'}>Start value:</p>
                <input type="number"
                       className={countState.minValue < 0 ? 'inputErrorStyle' : 'inputStyle'}
                       onChange={updateMinValue}
                       onFocus={() => onFocusHandler()}
                       value={countState.minValue}
                />
            </div>
            <Button name={'set'} classes={'inc-button'} onClick={saveValues}
                    disabled={countState.maxValue < 0 || countState.minValue < 0}/>
        </div>
    )
}