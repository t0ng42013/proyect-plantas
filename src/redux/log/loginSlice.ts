import { createSlice } from "@reduxjs/toolkit";

interface Log{
log: boolean;
token: string;
}
const INITIAL_STATE:Log = {
log: false,
token: ''
};



const loginSlice = createSlice({
    name: 'user',
    initialState:INITIAL_STATE,
    reducers: {
        createAccount : (state:Log)=>{
            return{
                ...state,
                log: !state.log
            }
        }
    }
});

export const {createAccount} = loginSlice.actions;
export default loginSlice.reducer;