import React from "react";
import '../App.css'

type CountClickerType = {
    classes: string
    countNum: number
    maxValue: number
    minValue: number
    textOnFocusEvent: boolean
}

export const CountClicker = ({
                                 classes,
                                 countNum,
                                 maxValue,
                                 minValue,
                                 textOnFocusEvent
                             }: CountClickerType) => {
    return (
        <div className={classes}>
            {
                maxValue < 0 || minValue < 0 || maxValue <= minValue
                    ? <div className={'countError'}>Incorrect value!</div>
                    : textOnFocusEvent
                        ? <div className={'enterValueText'}>enter values and press 'set'</div>
                        : countNum
            }
        </div>
    )
}