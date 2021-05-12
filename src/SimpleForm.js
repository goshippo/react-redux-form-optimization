

import { useCallback, useState } from 'react'
import { Field, reduxForm } from 'redux-form'

const SimpleForm = props => {
  const { handleSubmit, pristine, reset, submitting } = props;
  const [ userData, setUserData ] = useState({});

  const handleFormSubmit = useCallback((data)=>{
      setUserData(data);
  },[]);
  return (
    <form onSubmit={handleSubmit(handleFormSubmit)}>
      <div class="form_wrapper">
        <label>First Name</label>
        <div>
          <Field
            name="firstName"
            component="input"
            type="text"
            placeholder="First Name"
          />
        </div>
      </div>
      <div class="form_wrapper">
        <label>Last Name</label>
        <div>
          <Field
            name="lastName"
            component="input"
            type="text"
            placeholder="Last Name"
          />
        </div>
      </div>
      <div class="form_wrapper">
        <label>Email</label>
        <div>
          <Field
            name="email"
            component="input"
            type="email"
            placeholder="Email"
          />
        </div>
      </div>
      <div class="form_wrapper">
        <label>Favorite Color</label>
        <div>
          <Field name="favoriteColor" component="select">
            <option >Select One</option>
            <option value="ff0000">Red</option>
            <option value="00ff00">Green</option>
            <option value="0000ff">Blue</option>
          </Field>
        </div>
      </div>
      <div class="form_wrapper">
        <button type="submit" disabled={pristine || submitting}>
          Submit
        </button> &nbsp;
        <button type="button" disabled={pristine || submitting} onClick={reset}>
          Clear Values
        </button>
      </div>
      {!pristine && <div class="form_wrapper">{JSON.stringify(userData)}</div>}
    </form>
  )
}

export default reduxForm({
  form: 'simple' // a unique identifier for this form
})(SimpleForm)