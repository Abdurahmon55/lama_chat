import { createSlice} from '@reduxjs/toolkit';

const initialState = {
    user: '',
};

const authSlice = createSlice({
    name:'auth',
    initialState,
    reducers: {
        getAuth:(state, action)=>{
            state.user=action.payload
        }
    }
})

export const {getAuth}=authSlice.actions
export const selectAuth=(state)=>state.auth.user
export default authSlice.reducer