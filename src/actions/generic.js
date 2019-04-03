import { createAction } from 'redux-act'

export const startApp = createAction()
export const enterPage = createAction()
export const exitPage = createAction()
export const moveMouse = createAction('moveMouse')
export const changePageSize = createAction()
export const tick = createAction()
export const toggleSnackbar = createAction()
