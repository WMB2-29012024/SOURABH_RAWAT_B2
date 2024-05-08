import { useState } from 'react'
import FormComponent from './components/FormComponent'
import DataComponent from './components/DataComponent'

const Task4 = () => {
    const [data, setdata] = useState({});
    return (
        <div>
            <FormComponent setdata={setdata} />
            <DataComponent data={data} />
        </div>
    )
}

export default Task4