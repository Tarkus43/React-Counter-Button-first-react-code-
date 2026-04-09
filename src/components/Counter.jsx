import { useState } from 'react'

const Counter = () => {
    let [count, setCount] = useState(0)
    return (
        <>
            <h1>Current count: {count}</h1>
            <button onClick={() => setCount(count + 1)}>press me!</button>
        </>
    )
}

export default Counter
