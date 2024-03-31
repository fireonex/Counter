import React from "react";
import '../App.css'

type CountClickerType = {
    // countFunc: () => void
    // resetFunc: () => void
    classes: string
    countNum: number
}

export const CountClicker = ({classes, countNum}:CountClickerType) => {
    return (
        <div className={classes}>{countNum}</div>
    )
}