import React, {useEffect, useState} from 'react';
import './App.css';

import {Button} from "./components/Button";
import {CountClicker} from "./components/CountClicker";
import {CountTuner} from "./components/CountTuner";


function App() {

    const [maxValue, setMaxValue] = useState<number>(5)

    const [minValue, setMinValue] = useState<number>(0)

    const [temporaryMaxValue, setTemporaryMaxValue] = useState<number>(() => {
        const valueAsString = localStorage.getItem('counterMaxValue');
        return valueAsString ? JSON.parse(valueAsString) : maxValue;
    })

    const [temporaryMinValue, setTemporaryMinValue] = useState<number>(
        () => {
            const valueAsString2 = localStorage.getItem('counterMinValue');
            return valueAsString2 ? JSON.parse(valueAsString2) : minValue;
        }
    )

    const [textOnFocusEvent, setTextOnFocusEvent] = useState(false)

    const [count, setCount] = useState(minValue)


    useEffect(() => {
        localStorage.setItem('counterMaxValue', JSON.stringify(temporaryMaxValue));
    }, [temporaryMaxValue]);

    useEffect(() => {
        localStorage.setItem('counterMinValue', JSON.stringify(temporaryMinValue));
    }, [temporaryMinValue]);


    const CounterFunction = () => {
        setCount(num => (num <= maxValue ? num + 1 : num))
    }

    const ResetFunction = () => {
        setCount(minValue)
    }

    const onFocusHandler = () => {
        setTextOnFocusEvent(!textOnFocusEvent)
    }

    return (
        <div className="App">
            <div className={'countersBox'}>
                <CountTuner classes={'block2'}
                            setMaxValue={setMaxValue}
                            setMinValue={setMinValue}
                            setTemporaryMaxValue={setTemporaryMaxValue}
                            setTemporaryMinValue={setTemporaryMinValue}
                            temporaryMaxValue={temporaryMaxValue}
                            temporaryMinValue={temporaryMinValue}
                            onFocusHandler={onFocusHandler}
                            setCount={setCount}
                />
                <div className={'block'}>

                    <CountClicker
                        classes={count === maxValue ? 'red-num' : 'num'}
                        countNum={count}
                        temporaryMaxValue={temporaryMaxValue}
                        temporaryMinValue={temporaryMinValue}
                        textOnFocusEvent={textOnFocusEvent}
                    />
                    <div className={'buttonsWrapper'}>
                        <Button name={'inc'}
                                onClick={CounterFunction}
                                classes={'inc-button'}
                                disabled={count === maxValue
                                    || temporaryMaxValue < 0
                                    || temporaryMinValue < 0
                                    || temporaryMaxValue <= temporaryMinValue}/>
                        <Button name={'reset'}
                                onClick={ResetFunction}
                                classes={'reset-button'}
                                disabled={count === minValue
                                    || temporaryMaxValue < 0
                                    || temporaryMinValue < 0
                                    || temporaryMaxValue <= temporaryMinValue}/>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default App;
