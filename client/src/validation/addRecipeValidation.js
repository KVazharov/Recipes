
export default function addRecipeValidation(values) {

    let validationErrors = {};

    if (!values.image) {
        validationErrors.image = 'Image is required!';
    }
    if (!values.name) {
        validationErrors.name = 'Field is required!';
    }
    if (values.category == '---' || values.category =='') {
        validationErrors.category = 'Field is required!';
    }

    if (!values.igredients) {
        validationErrors.igredients = 'Field is required!';
    }

    if (!values.preparation) {
        validationErrors.preparation = 'Field is required!';
    }
    
    return validationErrors;
}

