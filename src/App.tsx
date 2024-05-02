import React from 'react';
import './App.css';
import {Button} from "./components/Button";
import {CountClicker} from "./components/CountClicker";
import {CountTuner} from "./components/CountTuner";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "./store";
import {CounterIncreaseAC, CounterState, OnFocusAC, ResetCountAC} from "./CounterReducers";


function App() {

    let countState = useSelector<AppRootStateType, CounterState>(state => state.count)

    let dispatch = useDispatch()

    const incrementCount = () => {
        dispatch(CounterIncreaseAC())
    }

    const resetCount = () => {
        dispatch(ResetCountAC())
    }

    const toggleFocus = () => {
        dispatch(OnFocusAC())
    }

    const isIncDisabled = countState.count === countState.maxValue || countState.maxValue <= countState.minValue || countState.maxValue < 0 || countState.minValue < 0;
    const isResetDisabled = countState.count === countState.minValue || countState.maxValue <= countState.minValue || countState.maxValue < 0 || countState.minValue < 0;


    return (
        <div className="App">
            <div className={'countersBox'}>
                <CountTuner classes={'block2'}
                            onFocusHandler={toggleFocus}
                />
                <div className={'block'}>
                    <CountClicker
                        classes={countState.count === countState.maxValue ? 'red-num' : 'num'}
                        textOnFocusEvent={countState.isFocused}
                    />
                    <div className={'buttonsWrapper'}>
                        <Button name={'inc'}
                                onClick={incrementCount}
                                classes={'inc-button'}
                                disabled={isIncDisabled}/>
                        <Button name={'reset'}
                                onClick={resetCount}
                                classes={'reset-button'}
                                disabled={isResetDisabled}/>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default App;
