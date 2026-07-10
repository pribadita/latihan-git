import '../style.css'

const Welcome = (props) => {
    return (
    <>
        <div className='card'>
            <h1>Hello, {props.name}</h1>
            <h1>Job : {props.job}</h1>
            <h1>Age : {props.age}</h1>
        </div>
    </>
    )
}

export default Welcome