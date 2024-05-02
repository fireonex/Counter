export type CounterState = {
    count: number;
    maxValue: number;
    minValue: number;
    isFocused: boolean;
}


export type CounterIncreaseActionType = {
    type: 'INCREMENT-COUNT'
}

export type ResetCountActionType = {
    type: 'RESET-COUNT'
}

export type OnFocusActionType = {
    type: 'TOGGLE-FOCUS'
}

export type updateMaxValueActionType = {
    type: 'UPDATE-MAX-VALUE'
    value: number
}

export type updateMinValueActionType = {
    type: 'UPDATE-MIN-VALUE'
    value: number
}

export type saveValuesActionType = {
    type: 'SAVE-VALUES'
    maxValue: number
    minValue: number
}

type ActionsType = CounterIncreaseActionType
    | ResetCountActionType
    | OnFocusActionType
    | updateMaxValueActionType
    | updateMinValueActionType
    | saveValuesActionType


let initialState: CounterState = {
    count: 0,  // Это значение будет переопределено при сохранении значений
    maxValue: 5,
    minValue: 0,
    isFocused: false
};

export const CounterReducer = (state: CounterState = initialState, action: ActionsType): CounterState => {
    switch (action.type) {
        case 'INCREMENT-COUNT': {
            if (state.count < state.maxValue) {
                return {
                    ...state,
                    count: state.count + 1
                };
            }
            return state;
        }
        case 'RESET-COUNT': {
            return {
                ...state,
                count: state.minValue
            };
        }
        case 'TOGGLE-FOCUS': {
            return {
                ...state,
                isFocused: !state.isFocused
            };
        }
        case 'UPDATE-MAX-VALUE': {
            return {
                ...state,
                maxValue: action.value
            };
        }
        case 'UPDATE-MIN-VALUE': {
            return {
                ...state,
                minValue: action.value
            };
        }
        case 'SAVE-VALUES': {
            return {
                ...state,
                count: action.minValue,  // Обновляем счётчик на минимальное значение
                maxValue: action.maxValue,  // Обновляем максимальное значение
                minValue: action.minValue  // Обновляем минимальное значение
            };
        }

        default:
            return state;
    }
}

export const CounterIncreaseAC = ():CounterIncreaseActionType  => {
    return {type: 'INCREMENT-COUNT'}
}

export const ResetCountAC = ():ResetCountActionType  => {
    return {type: 'RESET-COUNT'}
}

export const OnFocusAC = ():OnFocusActionType => {
    return {type: 'TOGGLE-FOCUS'}
}

export const UpdateMaxValueAC = (value: number):updateMaxValueActionType => {
    return {type: 'UPDATE-MAX-VALUE', value}
}

export const UpdateMinValueAC = (value: number):updateMinValueActionType => {
    return {type: 'UPDATE-MIN-VALUE', value}
}

export const SaveValuesAC = (maxValue: number, minValue: number): saveValuesActionType => {
    return {type: 'SAVE-VALUES', maxValue, minValue}
}

