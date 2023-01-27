import './Counter.css'

const Counter = ({ title, number }) => {
    return (
        <div className='counter'>
            <p className='counter-number'>{number}</p>
            <div className='counter-text'>{title}</div>
        </div>
    )
}

export default Counter