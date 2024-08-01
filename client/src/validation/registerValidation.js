export default function registerValidation(values) {

    let validationErrors = {};
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (!values.username) {
        validationErrors.username = 'Username is required!';
    }

    if (!values.email) {
        validationErrors.email = 'Email is required!';
    } else if (!emailRegex.test(values.email)) {
        validationErrors.email = "Email is not valid!";
    }

    if (!values.password) {
        validationErrors.password = 'Password is required!';
    } else if (values.password.length < 4) {
        validationErrors.password = 'Password must be more than 4 characters';
    } else if (values.password.length > 10) {
        validationErrors.password = 'Password cannot be more than 10 characters';
    }

    if (!values.repass) {
        validationErrors.repass = 'Confirm password is required!';
    } else if (values.repass.length < 4) {
        validationErrors.repass = 'Confirm password must be more than 4 characters';
    } else if (values.repass.length > 10) {
        validationErrors.repass = 'Confirm password cannot be more than 10 characters';
    }


    return validationErrors;
}