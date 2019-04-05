import { createAction } from 'redux-act'

export const changeTitle = createAction('changeTitle')

export const toggleEffect = createAction('toggleEffect')
export const save = createAction('save')
export const changeContent = createAction('changeContent')
export const startRequest = createAction('startRequest')
export const successfulSave = createAction('successfulSave')
export const successfulCreation = createAction('successfulCreation')
export const changeLink = createAction('changeLink')
export const exitLinkPrompt = createAction('exitLinkPrompt')
export const submitLink = createAction('submitLink')

export const toggleTagsMenu = createAction('toggleTagsMenu')
export const editTag = createAction('editTag')
export const submitTag = createAction('submitTag')
export const deleteTag = createAction('deleteTag')
export const publish = createAction('publish')

export const receiveStoryForEdit = createAction('receiveStoryForEdit')
export const updateStory = createAction('updateStory')
export const clear = createAction('clear')

export const toggleShareDialog = createAction('toggleShareDialog')
export const share = createAction('share')
export const changeUserToShareName = createAction('changeUserToShareName')