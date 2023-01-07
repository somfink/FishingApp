import { createSlice } from '@reduxjs/toolkit';
import React from 'react'

export type AccountCreated = {
    isAccountCreated: boolean;
}

const initialState = {
    isAccountCreated: true,
}

const createdAccountSlice = createSlice({
    name: 'created-account',
    initialState,
    reducers: {
        createAccount(state) {
            state.isAccountCreated = !state.isAccountCreated;
        }
    }
})

export const createdAccountActions = createdAccountSlice.actions;

export default createdAccountSlice;