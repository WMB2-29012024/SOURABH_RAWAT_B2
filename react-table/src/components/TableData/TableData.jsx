import { data } from '../TableData.js';
import './TableData.css';

const TableData = () => {
    return (
        <tbody>
            {
                data.map((list, idx) => {
                    // const objKeysInd = Object.values(data[idx]);
                    // console.log(objKeysInd);
                    return (
                        <tr className='table-row-description' key={idx}>
                            {/* <td className='table-description'>
                                {objKeysInd}
                            </td> */}
                            <td className='table-description'>
                                {data[idx].trackingID}
                            </td>
                            <td className='table-description'>
                                {data[idx].product}
                            </td>
                            <td className='table-description'>
                                {data[idx].customer}
                            </td>
                            <td className='table-description'>
                                {data[idx].date}
                            </td>
                            <td className='table-description'>
                                {data[idx].amount}
                            </td>
                            <td className='table-description'>
                                {data[idx].paymentMode}
                            </td>
                            <td className='table-description'>
                                {data[idx].status}
                            </td>
                        </tr>
                    )
                })
            }
        </tbody>
    )
}

export default TableData