import {combineReducers, legacy_createStore} from 'redux';
import {CounterReducer} from "./CounterReducers";
import {loadState, saveState} from "./utils/localstorage-utils";


// объединяя reducer-ы с помощью combineReducers,
// мы задаём структуру нашего единственного объекта-состояния
const rootReducer = combineReducers({
    count: CounterReducer
})


// непосредственно создаём store
export const store = legacy_createStore(rootReducer, loadState());

store.subscribe(() => {
    saveState({
        count: store.getState().count
    });
});

//это вынесено в utils
// store.subscribe(() => {
//     localStorage.setItem('app-state', JSON.stringify(store.getState()))
//     // localStorage.setItem('max-value', JSON.stringify(store.getState().count?.maxValue)) - как доставать конкретное значение
// })


export type AppRootStateType = ReturnType<typeof rootReducer>

// а это, чтобы можно было в консоли браузера обращаться к store в любой момент
// @ts-ignore
window.store = store;


// //структура store
// {
//     state: {
//         countState: {}
//     }
//     getState()
//     dispatch()
//     subscribe()
// }