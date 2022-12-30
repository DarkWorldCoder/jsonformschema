import React, { useState, useEffect } from 'react';
import './App.scss';
import { Form, TextField, SubmitButton } from './components/FormElements'
import * as Yup from 'yup';
import SelectField from './components/SelectField';
import InputField from './components/InputField';
import formSchema from "../src/form.json"

// const formSchema = {
  
// }

function App() {
    // initioal form data
    const [formData, setFormData] = useState({});
    const [validationSchema, setValidationSchema] = useState({});

    useEffect(() => {  
        //  initializing form data
        initForm(formSchema);
    }, []);

    const initForm = (formSchema) => {
        let _formData = {};
        let _validationSchema = {};
       
        // iterating all the keys in schema
        for(var key of Object.keys(formSchema)){
            
            // creating empty dormdata with key
            _formData[key] = "";

            // using yup to validate

            if(formSchema[key].type === "text"){
                _validationSchema[key] = Yup.string();
            }else if(formSchema[key].type === "email"){
                _validationSchema[key] = Yup.string().email()
            }
            else if(formSchema[key].type === "password"){
                _validationSchema[key] = Yup.string().required('No password provided.') 
                .min(8, 'Password is too short - should be 8 chars minimum.')
                .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.')
            }
            else if(formSchema[key].type === "select"){
                _validationSchema[key] = Yup.string().oneOf(formSchema[key].options.map(o => o.value));
            }

            if(formSchema[key].required){
                _validationSchema[key] = _validationSchema[key].required('Required');
            }
        }
         
        // seting form data to initial value
        // like {name:"",password:""}
        setFormData(_formData);
        setValidationSchema(Yup.object().shape({ ..._validationSchema }));
    }

    // generating fields according to the given schema 

    const getFormElement = (elementName, elementSchema) => {
        // props of object of required data
        const props = {
            name: elementName,
            type:elementSchema.type,
            label: elementSchema.label,
            options: elementSchema.options
        };
        // console.log(props)
        if (elementSchema.type === "select") {
            return <SelectField  {...props} />
        }
        else{
            return <InputField {...props} />
        }

       

      

    }

    const onSubmit = (values, { setSubmitting, resetForm, setStatus }) => {
        console.log(values);
        setSubmitting(false);

        resetForm()
        console.log("successfully submitted")
    }

    return (
        <div className="app">
            <Form
                enableReinitialize
                initialValues={formData}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
            >
               
                {Object.keys(formSchema).map( (key, ind) => (
                    <div key={key}>
                        {getFormElement(key, formSchema[key])}
                    </div>
                ))}
                   <SubmitButton
              title="Submit"
            />

            </Form>
        </div>
    );
}

export default App;