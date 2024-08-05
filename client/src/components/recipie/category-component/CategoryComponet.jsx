import { useParams } from 'react-router-dom';
import useCategory from '../../../hooks/useCategory';
import RecipieListItem from '../recipieListItem/RecipieListItem';

import './CategoryComponet.css';
import Spinner from '../../spinner/Spinner';

export default function CategoryComponet() {
    const { category } = useParams();

    const [recipes, capCategory, isLoading, ] = useCategory(category);
  
    return (
        <>
            <h1>{capCategory}</h1>
            {isLoading ? <Spinner /> :
                <div>
                    <div className='category-component'>
                        {recipes.length > 0 ? (
                            recipes.map(recipe => <RecipieListItem key={recipe._id} {...recipe} />)
                        ) : (
                            <div className="no-recipes">No Recipes Found</div>
                        )
                        }
                    </div>
                </div>
            }
        </>
    )
}