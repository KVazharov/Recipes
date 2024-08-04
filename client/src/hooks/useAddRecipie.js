import { useState } from "react"


import { ref, uploadBytes, getDownloadURL } from 'firebase/storage'
import { storage } from "../firebase"
import { v4 } from 'uuid'
export default function useAddRecipie(initialValues) {
    const [addRecipieFormValues, setAddRecipieFormValues] = useState(initialValues);
    
    
    const changeHandler = (e) => {
        setAddRecipieFormValues(oldValues => ({
            ...oldValues,
            [e.target.name]: e.target.value,
        }))
    }
    const handleImageUpload = async (e) => {

        const imageUpload = e.target.files[0];

        if (imageUpload == null) return;

        const imageRef = ref(storage, `${imageUpload.name + v4()}`);
        const uploadedImage = await uploadBytes(imageRef, imageUpload);
        const downloadURL = await getDownloadURL(uploadedImage.ref);

        setAddRecipieFormValues(oldValues => ({
            ...oldValues,
            image: downloadURL,
        }));
    }

    return [
        addRecipieFormValues,
        changeHandler,
        handleImageUpload
    ]
}