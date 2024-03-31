import React from "react";
import '../App.css'
import {Button} from "./Button";

type CountClickerType = {
    // countFunc: () => void
    // resetFunc: () => void
    classes: string
    //countNum: number
}

export const CountTuner = ({classes}:CountClickerType) => {
    return (
        <div className={classes}>
            <div className={'inputWrapper'}>
                <p className={'inputName'}>Max value:</p>
                <input type="number" className={'inputStyle'}/>
            </div>
            <div className={'inputWrapper'}>
                <p className={'inputName'}>Start value:</p>
                <input type="number" className={'inputStyle'}/>
            </div>
            <Button name={'set'} disabled={false} classes={'inc-button'} onClick={() => {}}/>
        </div>
    )
}