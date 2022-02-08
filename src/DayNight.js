import { useState } from "react";

const DayNight = () => {
    const [day, setDay] = useState();
    return (
        <section style={day ? { background: 'bisque', color: 'cornflowerblue' } : { background: 'darkblue', color: 'whitesmoke' }}>
            <p>{day ? 'Es ist Tag' : 'Es ist Nacht'}</p>
            <button onClick={() => { setDay(!day) }} >{day ? 'Wechsel zu Tag' : 'Wechsel zu Nacht'}</button >
        </section >
    );
}

export default DayNight;