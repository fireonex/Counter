import React from "react";
import '../App.css'

type CountClickerType = {
    classes: string
    countNum: number
}

export const CountClicker = ({classes, countNum}:CountClickerType) => {
    return (
        <div className={classes}>{countNum}</div>
    )
}