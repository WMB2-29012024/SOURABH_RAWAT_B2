import './Alert.css';

const Alert = () => {
    const alertShowing = function () {
        alert("Button clicked");
    }

    const rightAlert = function () {
        alert("Button right clicked");
    }
    return (
        <div className='center-button'>
            <button onClick={alertShowing} onContextMenu={rightAlert} style={{ padding: '8px 16px' }}>Alert</button>
        </div >
    )
}

export default Alert