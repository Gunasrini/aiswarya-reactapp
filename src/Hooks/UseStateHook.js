import React, { useState } from 'react'

export default function UseStateHook() {
    const [count, setCount] = useState(1000);
    const [name, setName] = useState("Angular");
    const [course,] = useState(["HTML", "CSS", "Javascript", "JQuery", "Full Stack"])
    const increment = () => {
        setCount(count + 1)
    }
    const reset = () => {
        setCount(1000)
    }
    return (
        <div className='col-md-12 text-start border p-3 px-4 mb-4'>
            <h3 className='mb-4 text-decoration-underline'>useState Hook:</h3>
            <h5>Count - {count} Name - {name}</h5>
            <div className='btn-group mt-2 mb-4'>
                <button className='btn btn-success' onClick={increment}>Increment</button>
                <button className='btn btn-primary' onClick={() => setCount(count - 1)}>Decrement</button>
                <button className='btn btn-secondary' onClick={reset}>Reset</button>
                <button className='btn btn-warning' onClick={() => setName("React")}>Change Name</button>
            </div>

            <h5>Courses List:</h5>
            <ul className='text-start'>
                {
                    course.map(c => <li key={c}>{c}</li>)
                }
            </ul>
        </div>
    )
}
