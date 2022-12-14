import React from 'react';
import './About.css'

export default function About() {
    const course = ["HTML", "CSS", "Javascript", "JQuery", "React", "Angular"];
    const students = [{
        id: 1,
        name: "Guna",
        location: "Trichy",
        role: "Developer"
    },
    {
        id: 2,
        name: "Vinotha",
        location: "Chennai",
        role: "Admin"
    },
    {
        id: 3,
        name: "Aiswarya",
        location: "Chennai",
        role: "Developer"
    },
    {
        id: 4,
        name: "Arul",
        location: "Ooty",
        role: "Lead"
    }]
    const textColor = {
        fontSize: "16px",
        lineHeight: "25px",
        textTransform: "Capitalize",
        fontFamily: "monospace"
    }
    return (
        <div className='about-page'>
            <h1 style={{ color: "#ff0000", textDecoration: "underline" }}>About US</h1>
            <p style={textColor}>The standard Lorem Ipsum passage, used since the 1500s
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

                Section 1.10.32 of "de Finibus Bonorum et Malorum", written by Cicero in 45 BC
                "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.?"</p>
            <ul style={{ textAlign: "left" }}>
                {
                    course.map((element, index) => <li key={index}>{element}</li>)
                }
            </ul>
            <table className='table table-bordered'>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Location</th>
                        <th>Role</th>
                    </tr>
                </thead>
                <tbody>
                    <>
                        {
                            students.map((element) => <tr key={element.id}>
                                <td>{element.name}</td>
                                <td>{element.location}</td>
                                <td>{element.role}</td>
                            </tr>)
                        }
                    </>
                </tbody>
            </table>
        </div>
    )
}
