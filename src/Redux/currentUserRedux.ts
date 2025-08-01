import { createSlice } from '@reduxjs/toolkit'
import type { CurrentUserState } from '../Types/generalTypes'

const initialState:CurrentUserState = {
  user: null,
  preferences: {
    languages: 'ENGLISH'
  },
  error: { type: null, message: '' },
  isFetching: false,
  otpIsEnabled: false
}

const currentUserSlice = createSlice({
  name:'currentUser',
  initialState,
  reducers:{
    // USER LOGIN
    userLoginStart:(state) => {
      state.isFetching=true
    },
    userLoginSuccess:(state,action) => {
      state.isFetching=false
      state.user=action.payload
      state.error={ type: null, message: '' }
    },
    userLoginFailure:(state,error) => {
      state.isFetching=false
      state.error=error.payload
    },

    // USER LOGOUT
    userLogoutSuccess:() => initialState,

    // UPDATE A USER
    updateUserProfileStart:(state) => {
      state.isFetching=true
      state.error={ type: null, message: '' }
    },
    updateUserProfileSuccess:(state,action) => {
      state.isFetching=false
      state.user = action.payload
      state.error={ type: null, message: '' }
    },
    updateUserProfileFailure:(state,error) => {
      state.isFetching=false
      state.error=error.payload
    },

    // UPDATE OTP STATUS
    updateOTPStatus:(state,action) => {
      state.isFetching=false
      state.otpIsEnabled = action.payload
    },

    updatePreferences:(state,action) => {
      if(action.payload.languages){
        state.preferences.languages = action.payload.languages
      }
    }
  }
})

export const { userLoginStart,userLoginSuccess,userLoginFailure,userLogoutSuccess,updateUserProfileStart,
  updateUserProfileSuccess,updateUserProfileFailure, updateOTPStatus, updatePreferences } = currentUserSlice.actions
export default currentUserSlice.reducer