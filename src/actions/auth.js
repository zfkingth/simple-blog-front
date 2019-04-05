import { createAction } from 'redux-act'

export const submitLogin = createAction('submitLogin')
export const submitRegister = createAction('submitRegister')

export const receiveAuthData = createAction('receiveAuthData')
export const unauthorizeUser = createAction('unauthorizeUser')
