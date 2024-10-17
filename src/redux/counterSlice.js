import { createSlice } from "@reduxjs/toolkit";

// createSlice() - returns autoatically reducer as well as action
const counterSlice = createSlice({
    name:'counter',
    initialState: {
        value:0
    },
    // actions / logical operations to be performed
    reducers:{
        increment : (state)=>{
            state.value+=1
        },
        decrement : (state)=>{
            state.value-=1
        },
        reset : (state)=>{
            state.value=0
        },
        changeRange : (state, action)=>{
            state.value += action.payload
        }
    }
})

// actions are needed for components
export const {increment, decrement, reset, changeRange} = counterSlice.actions

// reducers are needed for store to update state
export default counterSlice.reducer