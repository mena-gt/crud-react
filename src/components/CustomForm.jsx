import { useEffect, useState } from "react";

import FormComponent from "./shared/form/Form";
import InputFieldConponent from "./shared/form/InputField";

const CustomFormComponent = ({ 
    onSubmit, onChange, initialValue = {}, onBack }) => {
    
    const [formFields, setFormFields] = useState (initialValue);
    const [valid, setValid] = useState (true);
    const [errors, setErrors] = useState ({})

    useEffect (() =>
        { if (onChange) { onChange (formFields, valid, errors) } },
        [onChange, formFields, valid, errors]
    );

    return (

        <div>
            <button
                className="button"
                onClick={onBack}>
                Back
            </button>
            <FormComponent
                value={formFields}
                onChange={setFormFields}
                onValid={(v, errs) => {
                    setValid (v);
                    setErrors (errs);
                }} >
                
                <InputFieldConponent 
                    name="field1" 
                    onValidate={(v) =>
                        !v || v.length < 3 ? 'Too short!' : null
                    } />
                
                <button
                    className="button"
                    disabled={!valid}
                    onClick={() =>
                        onSubmit && onSubmit (formFields)
                    }>
                    Submit
                </button>
            </FormComponent>
        </div>
    );
};

export default CustomFormComponent;