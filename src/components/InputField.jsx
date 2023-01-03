import { ErrorMessage, Field } from 'formik'
import React from 'react'
import "./InputField.scss"
const InputField = (props) => {
    const { elementName,errors, type,label, placeholder,value,handleChange, ...rest } = props
     
   

    
    return (
        <div className='input_container'>
            {label && <label for={elementName}>{label}</label>}
            
           
            {type==="file"?(
                <>
             <label  class="drop-container">
                <span class="drop-title">Drop files here</span>
 or
               <input type="file" 
                    name={elementName}
                    onChange={(e)=>handleChange(e)}
                    id={elementName}
                    multiple
                    placeholder={placeholder || ""} 
                    {...rest}
                    />
            </label>
            {errors[elementName]&&<div style={{color:"red"}}>{errors[elementName]}</div>}
            </>
            ):(
                <>
            <input
                    value={value}
                    onChange={(e)=>handleChange(e)}
                                    className="form-control"
                                    type={type}
                                    name={elementName}
                                    id={elementName}
                                    placeholder={placeholder || ""} 
                                        {...rest}
                                />
                                {errors[elementName]&&<div style={{color:"red"}}>{errors[elementName]}</div>}

                                </> 
            )
           
            }
            {/* <ErrorMessage name={name} render={msg => <div style={{ color: 'red' }} >{msg}</div>} /> */}
        </div>
    )
}

export default InputField