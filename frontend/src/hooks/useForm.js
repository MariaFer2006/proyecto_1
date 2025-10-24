import { useState } from 'react';

export const useForm = (initialState = {}) => {
    const [values, setValues] = useState(initialState);
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setValues({
            ...values,
            [name]: value
        });
        
        if (errors[name]) {
            setErrors({
                ...errors,
                [name]: null
            });
        }
    };

    const resetForm = () => {
        setValues(initialState);
        setErrors({});
    };

    const setFieldError = (field, error) => {
        setErrors({
            ...errors,
            [field]: error
        });
    };

    return {
        values,
        errors,
        handleChange,
        resetForm,
        setValues,
        setErrors,
        setFieldError
    };
};
