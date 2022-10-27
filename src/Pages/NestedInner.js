import React from 'react'
import { ServiceConsumer } from '../ContextAPI'

export default function NestedInner(props) {
    console.log(`Nested Inner page -  ${props.design}`)
    return (
        <div>
            <h2 className='mb-3'>Nested Inner Page</h2>
            <h4 className='text-start'>Below Services are we are providing:</h4>
            <ServiceConsumer>
                {
                    (serv) => {
                        return (
                            <ul className='text-start'>
                                {
                                    serv.map((s) => <li key={s}>{s}</li>)
                                }
                            </ul>
                        )
                    }
                }
            </ServiceConsumer>
        </div>
    )
}
