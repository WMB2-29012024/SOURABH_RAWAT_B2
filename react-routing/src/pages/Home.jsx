// import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const navigate = useNavigate();

    // useEffect(() => {
    //     setTimeout(() => {
    //         navigate('./contact')
    //     }, 3000)
    // }, [])
    return (
        <div>
            <h3>
                This is home page.
                <button onClick={() => navigate('./contact', { state: 123 })}>CLICK</button>
            </h3>
        </div>
    )
}

export default Home