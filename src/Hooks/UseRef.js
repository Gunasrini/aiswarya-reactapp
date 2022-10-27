import React, { useEffect, useRef } from 'react'

export default function UseRef() {
    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current.focus();
    }, [])
    return (
        <div className='col-md-12 text-start border p-3 px-4'>
            <h3 className='mb-4 text-decoration-underline'>useRef Hook:</h3>
            <div className='col-md-3'>
                <input type="text" ref={inputRef} className='useref form-control' />
            </div>
        </div>
    )
}
