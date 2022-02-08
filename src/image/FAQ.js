import { useState } from "react";

const FAQ = () => {
    const [openMenue, setOpenMenue] = useState() //false
    return (
        <section>
            <p>Open Menue</p>
            <button onClick={() => { setOpenMenue(!openMenue) }}>+</button>
            {/* not false = true */}
            <p style={openMenue ? { display: 'block' } : { display: 'none' }}> Menue is open</p>
        </section>
    );
}

export default FAQ;