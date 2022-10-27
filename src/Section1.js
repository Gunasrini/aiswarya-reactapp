

const Section1 = (props) => {
    console.log(props)
    return (
        <div className="border">
            <h1>Section1</h1>
            <p>Date: {props.date}</p>
        </div>
    )
}

export default Section1