import useMyPecipes from "../../../hooks/useMyRecipes";
import EditListItem from "../edit-list-item/EditListItem";

export default function MyRecipes() {
  const [myRecipes, error] = useMyPecipes([]);

  return (
    <>
      {error ? <ErrorMsg err={error} /> :
        (
          myRecipes.length > 0 ? (
            <div className="my-recipes">
              {myRecipes.map(recipe => <EditListItem key={recipe._id} {...recipe} />)}
            </div>
          ) :
            (
              <h1>No Recipes Found</h1>
            )
        )
      }
    </>
  )
}