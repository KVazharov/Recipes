import { useEffect, useState } from "react";


export default function useEdit(initialValues, submitHandler) {
    const [formValues, setFormValues] = useState(initialValues);

    useEffect(() => {
        setFormValues(initialValues);
    }, [initialValues])

    const onChangeHandler = (e) => {
        setFormValues(oldState => ({
            ...oldState,
            [e.target.name]: e.target.value
        }))
    }

    const onSubmit = (e) => {
        e.preventDefault();
        submitHandler(formValues);
        setFormValues(initialValues);

    }


    return {
        formValues,
        onChangeHandler,
        onSubmit
    }

}