import { createReducer, on } from "@ngrx/store";
import { decrement, increment } from "../actions/counter.action";


export const initialCounterState = 0;

export const counterReducer = createReducer(
    initialCounterState,
    on(increment, (state) => state + 1),
    on(decrement, (state) => state - 1)
);
