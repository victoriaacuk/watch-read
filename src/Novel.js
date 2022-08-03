import './App.css';
import { useState} from 'react';
import { dataFour } from './dataFour';

function Novel() {

    const [read, setRead] = useState(0);
    const {id, name, description, date, genre, author, image} = dataFour[read];

    const previousRead = () => {
    setRead((read => {
        read --;
        if (read < 0) {
        return dataFour.length - 1;
        }
        return read;
    }))
    }

    const nextRead = () => {
    setRead((read => {
        read ++;
        if (read > dataFour.length - 1) {
        read = 0;
        }
        return read;
    }))
    }

    return (
    <div>
        <div className='coners'>
            <img className='up' src={image} width="300px" alt="reading"/>
        </div>
        <div className='coners'>
            <h1>{id} - {name}</h1>
        </div>
        <div className='coners'>
            <h2>Author : {author} </h2>
        </div>
        <div className='coners'>
            <h2>Published : {date} </h2>
        </div>
        <div className='coners'>
            <h2>Genre : {genre} </h2>
        </div>
        <div className='coners'>
            <h2>{description}</h2>
        </div>
        <div className='but coners'>
            <button className='butns' onClick={previousRead}>Previous</button>
            <button className='butns' onClick={nextRead}>Next</button>
        </div>
    </div>
    );
}

export default Novel;
