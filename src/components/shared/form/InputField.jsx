import React, { useContext, useState, useEffect } from 'react';
import FormContext from './FormContext';


const InputFieldConponent = (props) => {
    // extrae el object 'form' del formcontext
    const form = useContext (FormContext);

    // para establecer state.error
    const [error, setError] = useState ('');

    const { onValidate, name, label, ...otherProps } = props;

    // obtiene el valor del campo especificado
    let value = form.value && form.value (name);

    useEffect (() => 
        { if (onValidate) { setError (onValidate (value)); } }, 
        [onValidate, value]
    );

    const setInvalid = form.setInvalid;

    useEffect (() => {
        if (setInvalid) { setInvalid (name, error); }
    }, [setInvalid, name, error]);

    if (!form.value) {
        return 'InputField should be wrapped in a form';
    }

    return (
        <div className="field">
            <label className="label" 
                htmlFor={name}>
                { label || name }
            </label>
            <div className="control">
                <input 
                    className="input" 
                    type="text" 
                    id={name} 
                    value={value || ''}
                    onBlur={() => form.setDirty(name)}
                    onChange={(e) => {
                        form.setDirty(name)

                        // llama a la funcion del objeto 'form'
                        // para actualizar su valor
                        form.setValue (name, e.target.value)
                    }}
                    {...otherProps} />
                {' '}
                {}
            </div>
            <p className="help is-danger">
                {form.isDirty(name) && error ? error : ''}
            </p>
        </div>
    );
};

export default InputFieldConponent;