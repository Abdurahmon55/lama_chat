import { createSlice} from '@reduxjs/toolkit';

const initialState = {
    user: '',
    contact: null,
};

const authSlice = createSlice({
    name:'auth',
    initialState,
    reducers: {
        getAuth:(state, action)=>{
            state.user=action.payload
        },
        setContact:(state, action)=>{
            state.contact=action.payload
        }
    }
})

export const {getAuth, setContact}=authSlice.actions
export const selectAuth=(state)=>state.auth.user
export const selectContact=(state)=>state.auth.contact
export default authSlice.reducer