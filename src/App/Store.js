import { configureStore } from '@reduxjs/toolkit'
import CounterReducer from './features/CounterSlice';

//stocker diff states
const store = configureStore({
	reducer: {
        counter: CounterReducer,
    },
})

export default store