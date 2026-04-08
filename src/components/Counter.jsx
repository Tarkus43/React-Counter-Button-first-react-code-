const Counter = (props) => {
    const { count } = props
    return (
        <>
            <h1>Counter Button</h1>
            <p>Current count: {count}</p>
        </>
    )
}

export default Counter
