import React, { Component } from "react";
// import Section1 from "./Section1";
// import Section2 from "./Section2";

export default class Content extends Component {
    course = ["HTML", "CSS", "Javascript", "JQuery", "React", "Angular"];
    render() {
        // const d = new Date();
        return (
            <div className="content">
                {/* <Section1 date="07" month="October" year="2022" /> */}
                {/* <Section1 date={d.toLocaleString()} />
                <Section2 /> */}
                <ul>
                    {
                        this.course.map((c) => <li>{c}</li>)
                    }
                </ul>
            </div>
        )
    }
}