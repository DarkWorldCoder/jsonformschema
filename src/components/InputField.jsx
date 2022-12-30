import { ErrorMessage, Field } from 'formik'
import React from 'react'
import "./InputField.scss"
const InputField = (props) => {
    const { name, type,label, placeholder, ...rest } = props
    return (
        <div className='input_container'>
            {label && <label for={name}>{label}</label>}
            
           
            {type==="file"?(
 <label for="images" class="drop-container">
 <span class="drop-title">Drop files here</span>
 or
 <Field type="file" 
 name={name}
 id={name}
 placeholder={placeholder || ""} 
 {...rest}
 />
</label>
            ):(
 <Field
                className="form-control"
                type={type}
                name={name}
                id={name}
                placeholder={placeholder || ""} 
                {...rest}
            /> 
            )
           
            }
            <ErrorMessage name={name} render={msg => <div style={{ color: 'red' }} >{msg}</div>} />
        </div>
    )
}

export default InputField