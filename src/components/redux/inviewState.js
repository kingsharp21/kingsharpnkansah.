import { createSlice } from '@reduxjs/toolkit'

export const InviewSlice = createSlice({
  name: 'inview',
  initialState: {
    value: {
        showcase : false,
        about : false,
        projects : false,
        contact : false
    }
  },
  reducers: {
    showcase: (state,view_state) => {
      state.value.showcase = view_state
    },
    about: (state,view_state) => {
      state.value.about = view_state
    },
    projects: (state,view_state) => {
      state.value.projects = view_state
    },
    contact: (state,view_state) => {
      state.value.contact = view_state
    },
    // decrement: state => {
    //   state.value -= 1
    // },
    // incrementByAmount: (state, action) => {
    //   state.value += action.payload
    // }
  }
})

// Action creators are generated for each case reducer function
export const { showcase , about , projects , contact } = InviewSlice.actions

export default InviewSlice.reducer