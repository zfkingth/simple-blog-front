import React from 'react'
import { Field, reduxForm } from 'redux-form'

import { submitLogin } from '../../actions/auth'
import { to } from '../../actions/navigation'
import { required, email, minLength6, lengthLessThan40 } from '../../validators/forms';
import { connectTo } from '../../utils/generic';
import { isValid } from '../../utils/forms'
import TextField from './text-field'
import AuthForm from './auth-form'

import { getFormSubmitErrors } from 'redux-form'

function transToString(state,formName)
{
 const obj= getFormSubmitErrors(formName)(state);
 const entries=Object.entries(obj);
 const ret=entries.reduce(function(prev,cur){
  return prev + cur[1];
},'');

 return ret;
}

export default connectTo(
  state => ({
    enabledSubmit: isValid(state, 'login'),
    myError:transToString(state,'login'),
  }),
  { to, submitLogin },
  reduxForm({ form: 'login' })(
    ({
      handleSubmit,
      enabledSubmit,
      submitLogin,
      to,
      myError
    }) => {
      const fields = [
        <Field
          name="email"
          key="email"
          component={TextField}
          label="Email"
          type="text"
          validate={[required, email]}
        />,
        <Field
          name="password"
          key="password"
          component={TextField}
          label="Password"
          type="password"
          validate={[required, minLength6, lengthLessThan40]}
        />
      ];
     
      return (
        <AuthForm
          fields={fields}
          handleSubmit={handleSubmit}
          enabledSubmit={enabledSubmit}
          onSubmit={submitLogin}
          submitText='Login'
          onBottomTextClick={() => to('register')}

          errorText={myError}
          bottomText="Don't have an account? Register"
        />

      )
    }
  )
)