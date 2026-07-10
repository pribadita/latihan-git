

const Welcome = (props) => {
    return (
        <div className="card" style={{color:props.color ?? "red"}}>
            <h1>Hello, {props.name}</h1>
            <h1>Jobs : {props.job}</h1>
        </div>
    )
}

export default Welcome;