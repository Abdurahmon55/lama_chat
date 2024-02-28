import { createSlice} from '@reduxjs/toolkit';

const initialState = {
    user: '',
    contact: null,
    toggol: false,
    page:'',
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
        },
        setToggol:(state, action)=>{
            state.toggol=action.payload
        },
        setPage:(state, action)=>{
            state.page=action.payload
        }
    }
})

export const {getAuth, setContact, setToggol, setPage}=authSlice.actions
export const selectAuth=(state)=>state.auth.user
export const selectToggol=(state)=>state.auth.toggol
export const selectPgae=(state)=>state.auth.page
export const selectContact=(state)=>state.auth.contact
export default authSlice.reducer