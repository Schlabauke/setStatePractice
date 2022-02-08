import { useState } from "react";

const Counter = () => {
    const [counter, setCounter] = useState(0)


    return (
        <section>
            <div>
                <p>Counter: {counter} </p>
            </div>
            {counter ? <img src='/image/CountCount.jpeg' alt='CountCount' /> : null}
            <button onClick={() => { setCounter(counter + 1) }}> Add one</button >
            <button onClick={() => { setCounter(counter - 1) }}>remove one</button>
            <button onClick={() => { setCounter(0) }}>Start at 0</button>
        </section >
    );
}

export default Counter;