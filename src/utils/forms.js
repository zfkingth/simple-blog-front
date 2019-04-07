import { getFormSubmitErrors } from 'redux-form'

export function transSubmissonToString(state,formName)
{
 const obj= getFormSubmitErrors(formName)(state);
 const entries=Object.entries(obj);
 const ret=entries.reduce(function(prev,cur){
  return prev + cur[1];
},'');

 return ret;
}


export const submitHandler = (onSubmit, enabledSubmit) => e => {
  e.preventDefault()
  if (enabledSubmit) onSubmit()
}

export const submitAsyncValidation = (
  handleSubmit,
  enabledSubmit,
  onSubmit
) => e => {
  e.preventDefault()
  enabledSubmit &&
    handleSubmit(
      values =>
        new Promise((resolve, reject) => onSubmit({ values, resolve, reject }))
    )(e)
}

export const isValid = (state, formName) => isFormValid(state.form[formName])

export const isFormValid = form => form && !form.syncErrors && !form.pristine
