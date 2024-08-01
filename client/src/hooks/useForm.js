import { useState } from "react";


export default function useForm(submitHandler, initialValues) {
    const [formValues, setFormValues] = useState(initialValues)

    const onChangeHandler = (e) => {
        setFormValues(oldState => ({
            ...oldState,
            [e.target.name]: e.target.value
        }))
    }

    const onSubmit = (e) => {
        e.preventDefault();
        submitHandler(formValues);
    }





    return {
        formValues,
        onChangeHandler,
        onSubmit
    }

}