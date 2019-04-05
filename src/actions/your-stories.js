import { createAction } from 'redux-act'

export const selectTab = createAction('selectTab')
export const remove = createAction('remove')
export const edit = createAction('edit')
export const receiveStoriesForTab = createAction('receiveStoriesForTab')
export const clear = createAction('clear')