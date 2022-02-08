import { useState } from 'react';
import { Planet } from 'react-kawaii';


const RandomSmiley = () => {
    const [mood, setMood] = useState()
    const planetMood = ['sad', 'shocked', 'happy', 'blissful', 'lovestruck', 'excited', 'ko']
    let changeMood = () => {
        return setMood(Math.floor(Math.random() * planetMood.length))
    }
    return (
        <section>
            <Planet size={200} mood={planetMood[mood]} color="#FDA7DC" />
            <button onClick={changeMood}>switch Mood</button>
        </section >

    );
}

export default RandomSmiley;