import React, {useState} from 'react';
import './App.css';
import {Button} from "./components/Button";
import {CountClicker} from "./components/CountClicker";
import {CountTuner} from "./components/CountTuner";


function App() {

    const [maxValue, setMaxValue] = useState<number>(5)

    const [minValue, setMinValue] = useState<number>(0)

    const [textOnFocusEvent, setTextOnFocusEvent] = useState(false)

    const [count, setCount] = useState(minValue)


    const CounterFunction = () => {
        setCount(num => (num <= maxValue ? num + 1 : num))
    }

    const ResetFunction = () => {
        setCount(minValue)
    }

    const onFocusHandler = () => {
        setTextOnFocusEvent(!textOnFocusEvent)
    }

    const isIncDisabled = count === maxValue || maxValue <= minValue || maxValue < 0 || minValue < 0;
    const isResetDisabled = count === minValue || maxValue <= minValue || maxValue < 0 || minValue < 0;


    return (
        <div className="App">
            <div className={'countersBox'}>
                <CountTuner classes={'block2'}
                            setMaxValue={setMaxValue}
                            setMinValue={setMinValue}
                            maxValue={maxValue}
                            minValue={minValue}
                            onFocusHandler={onFocusHandler}
                            setCount={setCount}
                />
                <div className={'block'}>
                    <CountClicker
                        classes={count === maxValue ? 'red-num' : 'num'}
                        countNum={count}
                        maxValue={maxValue}
                        minValue={minValue}
                        textOnFocusEvent={textOnFocusEvent}
                    />
                    <div className={'buttonsWrapper'}>
                        <Button name={'inc'}
                                onClick={CounterFunction}
                                classes={'inc-button'}
                                disabled={isIncDisabled}/>
                        <Button name={'reset'}
                                onClick={ResetFunction}
                                classes={'reset-button'}
                                disabled={isResetDisabled}/>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default App;
