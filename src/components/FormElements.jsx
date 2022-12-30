import React from 'react';

import "./FormElement.scss"
export function Form(props) {
    return (
        // creating formik object
        
            <form 
            className="form_container" noValidate="">
                {props.children}
            </form>
        )
}




export function SubmitButton(props){
    const { title,onsubmit, ...rest } = props;
    
    return (
        <div className='submit_btn'>
        <button 
        
        type="submit" {...rest} >{title}</button>

        </div>
    )
}