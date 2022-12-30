import { ErrorMessage, Field } from 'formik'
import React from 'react'
import "./SelectField.scss"
const SelectField = (props) => {
    const { name, label, options } = props
  return (
    <div className='select_field'>
    {label && <label for={name}>{label}</label>}
    <Field
        as="select"
        id={name}
        name={name}
    >
        <option value="" >Choose...</option>
        {options.map((optn, index) => <option value={optn.value} label={optn.label || optn.value} />)}
    </Field>
    <ErrorMessage name={name} render={msg => <div style={{ color: 'red' }} >{msg}</div>} />
</div>
  )
}

export default SelectField