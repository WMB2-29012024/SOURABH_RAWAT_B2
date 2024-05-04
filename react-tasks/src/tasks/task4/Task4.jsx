import Card from './components/components/Card'

const Task4 = () => {
    const componentArray = [1, 2, 3, 4, 5, 6, 7];
    return (
        <div className='card-task'>
            {
                componentArray.map((idx) => {
                    return <Card key={idx} title={idx} />
                })
            }
        </div>
    )
}

export default Task4