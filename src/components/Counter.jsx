import { useState } from 'react'
import './Counter.css'

const Counter = (props) => {
    let [count, setCount] = useState(0)
    const { className, btnClassName, titleClassName } = props
    return (
        <div className={className}>
            <h1 className={titleClassName}>
                Current count: {count}
            </h1>

            <button className={btnClassName}
                onClick={() => setCount(count + 1)}
            >
                press me!
            </button>
        </div>
    )
}

export default Counter
