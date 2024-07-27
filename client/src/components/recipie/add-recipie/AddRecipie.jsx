import { useState } from "react"
import './AddRecipie.css'
import addRecipie from "../../../api/recipesService";

export default function AddRecipie() {

    const [addRecipieFormValues, setAddRecipieFormValues] = useState({
        images: '',
        category: '',
        name: '',
        igredients: '',
        preperaion: '',
    })
    
    const formSubmitHandler = async (e) => {
        e.preventDefault();
        addRecipie(addRecipieFormValues)
    }

    
    const changeHandler = (e) => {

        setAddRecipieFormValues(oldValues => ({
            ...oldValues,
            [e.target.name]: e.target.value,
        }))

    }
    return (
        <div className="add-recipe" >
            <form className="add-form" onSubmit={formSubmitHandler}>
                <h3>Add recipie</h3>
                <label htmlFor="images"></label>
                <input type="file" id="file" />
                <label htmlFor="category" id="category">Category:
                </label>
                <select
                    name="category"
                    id="category"
                    value={addRecipieFormValues.category}
                    onChange={changeHandler}>
                    <option value="---">---</option>
                    <option value="salads">Salads</option>
                    <option value="bbq">BBQ</option>
                    <option value="socktails">Socktails</option>
                    <option value="soups">Soups</option>
                    <option value="burgers">Burgers</option>
                    <option value="dessert">Dessert</option>
                </select>
                <label htmlFor="name">Recipie name</label>
                <input
                name="name"
                    type="text"
                    id="name"
                    value={addRecipieFormValues.name}
                    onChange={changeHandler}
                />

                <label htmlFor="igredients">Igredients</label>
                <textarea
                    name="igredients"
                    id="recipie-igredients"
                    cols="15"
                    rows="10"
                    value={addRecipieFormValues.igredients}
                    onChange={changeHandler}
                ></textarea>

                <label htmlFor="preperaion">Preparation</label>
                <textarea
                    name="preperaion"
                    id="preperaion"
                    cols="15"
                    rows="10"
                    value={addRecipieFormValues.preperaion}
                    onChange={changeHandler}
                ></textarea>

                <div className="btns">
                    <button className="cancle-btn">Cancle</button>
                    <button className="add-btn" type="submit">Add</button>
                </div>
            </form>
        </div>
    )
}