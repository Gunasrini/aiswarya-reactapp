import React, { useContext } from 'react'
import { HooksInfo } from '../ContextAPI'

export default function UseContext() {
    const btnStyle = useContext(HooksInfo);
    return (
        <div className='col-md-12 text-start border p-3 px-4 mb-4'>
            <h3 className='mb-4 text-decoration-underline'>useContext Hook:</h3>
            <button style={btnStyle}>UseContext Button</button>
        </div>
    )
}
