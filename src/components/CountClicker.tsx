import React from "react";
import '../App.css'

type CountClickerType = {
    classes: string
    countNum: number
    temporaryMaxValue: number
    temporaryMinValue: number
    textOnFocusEvent: boolean
}

export const CountClicker = ({
                                 classes,
                                 countNum,
                                 temporaryMaxValue,
                                 temporaryMinValue,
                                 textOnFocusEvent
                             }: CountClickerType) => {
    return (
        <div className={classes}>
            {
                temporaryMaxValue < 0 || temporaryMinValue < 0 || temporaryMaxValue <= temporaryMinValue
                    ? <div className={'countError'}>Incorrect value!</div>
                    : textOnFocusEvent
                        ? <div className={'enterValueText'}>enter values and press 'set'</div>
                        : countNum
            }
        </div>
    )
}