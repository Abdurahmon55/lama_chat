import { createSlice} from '@reduxjs/toolkit';

const initialState = {
    user: '',
    contact: null,
    toggol: false,
    page:'',
    profilePage:'',
};

const authSlice = createSlice({
    name:'auth',
    initialState,
    reducers: {
        setAuth:(state, action)=>{
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
        },
        setProfilePage:(state, action)=>{
            state.profilePage=action.payload
        }
    }
})

export const {setAuth, setContact, setToggol, setPage, setProfilePage}=authSlice.actions
export const selectAuth=(state)=>state.auth.user
export const selectToggol=(state)=>state.auth.toggol
export const selectPgae=(state)=>state.auth.page
export const selectProfilePage=(state)=>state.auth.profilePage
export const selectContact=(state)=>state.auth.contact
export default authSlice.reducer