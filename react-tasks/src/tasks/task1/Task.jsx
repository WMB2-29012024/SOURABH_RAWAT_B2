import CardComponent from './components/CardComponent'
import './Task.css';

const Task = () => {
    return (
        <div className='card-task'>
            <CardComponent />
            <CardComponent />
            <CardComponent />
            <CardComponent />
        </div>
    )
}

export default Task