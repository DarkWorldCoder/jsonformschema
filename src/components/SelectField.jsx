import React from 'react'
import "./SelectField.scss"
const SelectField = (props) => {
    const { elementName,errors,value,handleChange, label, options } = props
  return (
    <div className='select_field'>
    {label && <label for={elementName}>{label}</label>}
    <select
        onChange={(e)=>handleChange(e)}
        id={elementName}
        name={elementName}
        value={value}
        
    >
        <option value="" >Choose...</option>
        {options.map((optn, index) => <option value={optn.value} label={optn.label || optn.value} />)}
    </select>
    {errors[elementName]&&<div style={{color:"red"}}>{errors[elementName]}</div>}

    {/* <ErrorMessage name={name} render={msg => <div style={{ color: 'red' }} >{msg}</div>} /> */}
</div>
  )
}

export default SelectField