import { useState } from "react";
import Buttons from "./Buttons";
import { data } from "./data";
import Movies from "./Movies";


function Home() {
    const [movie, setMovie] = useState(data); 

    const chosenMovie = (searchTerm) => {
        const newMovie = data.filter(element => element.searchTerm === searchTerm);
        setMovie(newMovie);
    }

    return (
        <div>
            <div className="cont">
                <h2 className="back">Best "To Watch" List </h2>
            </div>
            <Buttons filteredMovies={chosenMovie}/>
            <Movies itemsToWatch={movie}/>
        </div>
    )
}

export default Home;