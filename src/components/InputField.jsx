import { ErrorMessage, Field } from 'formik'
import React from 'react'
import "./InputField.scss"
const InputField = (props) => {
    const { elementName,errors, type,label, placeholder,setFormData,formData, ...rest } = props
     
    const handleFileChange = (e)=>{
      const files = e.target.files[0]
      setFormData(prev=>({...prev,["file"]:files}))
    
    }

    
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
                    onChange={handleFileChange}
                    id={elementName}
                    placeholder={placeholder || ""} 
                    {...rest}
                    />
            </label>
            {errors[elementName]&&<div style={{color:"red"}}>{errors[elementName]}</div>}
            </>
            ):(
                <>
            <input
                    value={formData[elementName]}
                    onChange={(e)=>setFormData(prev=>({...prev,[elementName]:e.target.value}))}
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