

export default function RecipieListItem({
    image, 
    name
}) {
    return (
        <>
            <div className="recipe">
                <a href="#">
                    <div>
                        <img src={image}
                            alt="" />
                        <h4>{name}</h4>
                    </div>
                </a>
            </div>
        </>
    )
}