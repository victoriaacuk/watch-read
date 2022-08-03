import './App.css';
import { useState} from 'react';
import { dataTwo } from './dataTwo';

function Upcoming() {

    const [watch, setWatch] = useState(0);
    const {id, name, description, date, genre, country, image} = dataTwo[watch];

    const previousWatch = () => {
    setWatch((watch => {
        watch --;
        if (watch < 0) {
        return dataTwo.length - 1;
        }
        return watch;
    }))
    }

    const nextWatch = () => {
    setWatch((watch => {
        watch ++;
        if (watch > dataTwo.length - 1) {
        watch = 0;
        }
        return watch;
    }))
    }

    return (
    <div>
        <div className='container'>
            <img className='up' src={image} width="300px" alt="mv"/>
        </div>
        <div className='container'>
            <h1>{id} - {name}</h1>
        </div>
        <div className='container'>
            <h2>Release date : {date} </h2>
        </div>
        <div className='container'>
            <h2>Genre : {genre} </h2>
        </div>
        <div className='container'>
            <h2>Country : {country} </h2>
        </div>
        <div className='container'>
            <h2>{description}</h2>
        </div>
        <div className='btn container'>
            <button onClick={previousWatch}>Previous</button>
            <button onClick={nextWatch}>Next</button>
        </div>
    </div>
    );
}

export default Upcoming;
