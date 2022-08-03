function Buttons({filteredMovies}) {
    return  (
        <div className="cont">
            <button className="change" onClick={() => filteredMovies("cartoon")}>Cartoons</button>
            <button className="change" onClick={() => filteredMovies("drama")}>Drama</button>
            <button className="change" onClick={() => filteredMovies("anime")}>Anime</button>
            <button className="change" onClick={() => filteredMovies("movie")}>Movies</button>
        </div>
    )
}

export default Buttons;