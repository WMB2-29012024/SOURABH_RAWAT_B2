import './TableHeader.css';
import { data } from '../TableData';

const TableHeader = () => {
    const objKeys = Object.keys(data[0]);
    return (
        <thead>
            <tr className='table-headings'>
                {
                    objKeys.map((item, id) => {
                        return (
                            <td key={id}>{item}</td>
                        )
                    })
                }
            </tr>
        </thead>
    )
}

export default TableHeader