import React from 'react';
import {
    Formik,
    Form as FormikForm,
    Field,

    useFormikContext,
   
} from 'formik';
import "./FormElement.scss"
export function Form(props) {
    return (
        // creating formik object
        <Formik
        
            {...props}
        >
            <FormikForm className="form_container" noValidate="">
                {props.children}
            </FormikForm>
        </Formik>)
}




export function SubmitButton(props){
    const { title, ...rest } = props;
    const { isSubmitting } = useFormikContext();
    
    return (
        <div className='submit_btn'>
        <button type="submit" {...rest} disabled={isSubmitting}>{title}</button>

        </div>
    )
}