import './App.css';
import { useState} from 'react';
import { dataThree } from './dataThree';

function Manga() {

    const [read, setRead] = useState(0);
    const {id, name, description, date, genre, status, image} = dataThree[read];

    const previousRead = () => {
    setRead((read => {
        read --;
        if (read < 0) {
        return dataThree.length - 1;
        }
        return read;
    }))
    }

    const nextRead = () => {
    setRead((read => {
        read ++;
        if (read > dataThree.length - 1) {
        read = 0;
        }
        return read;
    }))
    }

    return (
    <div>
        <div className='coner'>
            <img className='up' src={image} width="300px" alt="reading"/>
        </div>
        <div className='coner'>
            <h1>{id} - {name}</h1>
        </div>
        <div className='coner'>
            <h2>Released year : {date} </h2>
        </div>
        <div className='coner'>
            <h2>Genre : {genre} </h2>
        </div>
        <div className='coner'>
            <h2>Status : {status} </h2>
        </div>
        <div className='coner'>
            <h2>{description}</h2>
        </div>
        <div className='btns coner'>
            <button className='bt' onClick={previousRead}>Previous</button>
            <button className='bt' onClick={nextRead}>Next</button>
        </div>
    </div>
    );
}

export default Manga;
