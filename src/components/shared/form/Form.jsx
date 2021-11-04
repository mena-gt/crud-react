import React, { useCallback, useEffect, useState} from 'react';

import FormContext from './FormContext';


function updateWith (oldValues, field, value) {
    const newValues = { ...oldValues };
    newValues[field] = value;
    return newValues;
}

const FormComponent = ({ children, value, onChange, onValid }) => {
    // El formulario le dara seguimiento a todos lo valores de los
    // campos a traves del objeto 'values'
    const [values, setValues] = useState (value || {});

    const [dirtyFields, setDirtyFields] = useState ({})
    const [invalidFields, setInvalidFields] = useState ({})

    useEffect (() => { setValues (value || {})}, [value]);

    useEffect (
        () => { if (onChange) { onChange (values) } }, 
        [onChange, values]
    );

    useEffect (
        () => { 
            if(onValid) { 
                onValid (Object.keys (invalidFields).every (
                    (i) => !invalidFields[i]), invalidFields
                )
            } 
        }, 
        [onValid, invalidFields]
    );

    // un callback para agregar el campo y su valor dentro del
    // objeto 'form' del formcontext
    const setValue = useCallback (
        (field, v) => setValues ((vs) => updateWith (vs, field, v)),
        [setValues]
    );

    // un callback para recuperar el valor del campo agregado
    // al objeto 'form' del formcontext
    const getValue = useCallback (
        (field) => values[field], 
        [values]
    );

    const setDirty = useCallback (
        (field) => setDirtyFields ((df) => ({ ...df, [field]: true })),
        [setDirtyFields]
    );

    const getDirty = useCallback (
        (field) => Object.keys (dirtyFields).includes (field),
        [dirtyFields]
    );

    const setInvalid = useCallback (
        (field, err) => {
            setInvalidFields ((i) => ({
                ...i,
                [field]: err ? err : undefined,
            }));
        },
        [setInvalidFields]
    );

    // El objeto 'form' para el fromcontext
    let form = {
        setValue: setValue,
        value: getValue,
        setDirty: setDirty,
        isDirty: getDirty,
        setInvalid: setInvalid,
    };

    return (
        <form onSubmit={(e) => {e.preventDefault ()}} >
            <FormContext.Provider value={form}>
                {children}
            </FormContext.Provider>
        </form>
    );
};

export default FormComponent;