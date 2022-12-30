import React, { useState, useEffect } from 'react';
import './App.scss';
import { Form, TextField, SubmitButton } from './components/FormElements'

import SelectField from './components/SelectField';
import InputField from './components/InputField';
import formSchema from "../src/form.json"


function App() {
    // initioal form data
    const [msg,setMsg] = useState("")
    const [showOverlay,setShowOverlay]= useState(false)
    const [formData, setFormData] = useState({});
    const [validationSchema, setValidationSchema] = useState({});
    const [formErrors,setFormErrors] = useState({})
    useEffect(() => {  
        //  initializing form data
        initForm(formSchema);
    }, []);

    const initForm = (formSchema) => {
        let _formData = {};
        
       
        // iterating all the keys in schema
        for(var key of Object.keys(formSchema)){
            
            // creating empty dormdata with key
            _formData[key] = "";

            // using yup to validate
        }
         
        // seting form data to initial value
        // like {name:"",password:""}
        setFormData(_formData);
        console.log(_formData)
    };

    // generating fields according to the given schema 

const getFormElement = (elementName, elementSchema) => {
        // props of object of required data
        const props = {
            elementName: elementName,
            type:elementSchema.type,
            label: elementSchema.label,
            options: elementSchema.options,
            setFormData:setFormData,
            formData:formData,
            errors:formErrors
        };
        // console.log(props)
        if (elementSchema.type === "select") {
            return <SelectField  {...props} />
        }
        else{
            return <InputField {...props} />
        }

       

      

    }
    // regex for validationg email
    const validateEmail = (email) => {
        const re =
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
      };

    
    const handleSubmit = (e) => {
        e.preventDefault()
        setFormErrors({})
        var _errors = {}
        Object.entries(formData).map(([key, val],entry)=>{
            if(val===""){
                _errors[key]="Required"
            }
            if(key==="email" && val !== ""){
                if(!validateEmail(val)){
                   _errors[key]="Email must be valid"
                }
            }
            if(key==="password" && val !== ""){
               if(val.length <8){
                _errors[key]="Password must be greater then 8 character"
            }
               }
            })
        if(Object.keys(_errors).length===0){
            setMsg("Form submitted")
            initForm(formSchema)
            setShowOverlay(true)
            setTimeout(()=>{
               setShowOverlay(false)
            },5000)

        }
        else{
            console.log("Error in submitting form")
            setFormErrors(_errors)
        }
        // console.log(formErrors)
    }

    return (
        <div className="app">
            <Form
             onSubmit={(e)=>handleSubmit(e)}  
            // onSubmit={()=>onSubmit(formData)}
            >
               
                {Object.keys(formSchema).map( (key, ind) => (
                    <div key={key}>
                        {getFormElement(key, formSchema[key])}
                    </div>
                ))}
                   <SubmitButton
              title="Submit"
              onClick={(e)=>handleSubmit(e)}
            />

            </Form>
    {
        showOverlay &&
        <div className='overlay'>
         {msg}
    </div>
    }
          
        </div>
    );
}

export default App;