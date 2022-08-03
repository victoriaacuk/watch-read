import { useState } from "react";

function Movies({itemsToWatch}) {

    const [showMore, setShowMore] = useState(false);
    
    const showTextClick = (element) => {
        element.showMore = !element.showMore
        setShowMore(!showMore)
        }
    
    return(
        <div className="products">
            {itemsToWatch.map((element => {
                const {id, name, description, image, showMore} = element;
                return(
                    <div className="product-card" key={id}>
                        <img src={image} width="400px" height="500px" alt="watch"/>
                        <div className="product-info">
                            <h3>{name}</h3>
                        </div>
                        <div className='co'>
                            <p>{showMore ? description : description.substring(0, 170) + "...."}
                            <button className="bu" onClick={() => showTextClick(element)}>{showMore ? "Show less" : "Show more"}</button></p>
                        </div>
                    </div>
                )
            }))}
        </div>
    )
}

export default Movies;