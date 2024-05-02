import React from "react";
import '../App.css'
import {useSelector} from "react-redux";
import {AppRootStateType} from "../store";
import {CounterState} from "../CounterReducers";

type CountClickerType = {
    classes: string
    textOnFocusEvent: boolean
}

export const CountClicker = ({classes, textOnFocusEvent}: CountClickerType) => {

    let countState = useSelector<AppRootStateType, CounterState>(state => state.count)


    return (
        <div className={classes}>
            {
                countState.maxValue < 0 || countState.minValue < 0 || countState.maxValue <= countState.minValue
                    ? <div className={'countError'}>Incorrect value!</div>
                    : textOnFocusEvent
                        ? <div className={'enterValueText'}>enter values and press 'set'</div>
                        : countState.count
            }
        </div>
    )
}