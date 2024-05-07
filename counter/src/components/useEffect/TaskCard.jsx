// import React, { useEffect, useState } from 'react'

// const TaskCard = () => {
//     const [count, setCount] = useState(0);
//     const [toggle, setToggle] = useState(false);

//     useEffect(() => {
//         console.log("bina array", { count });
//     });
//     useEffect(() => {
//         console.log("empty array", { count });
//     }, []);
//     useEffect(() => {
//         console.log("runs when count changes", { count });
//     }, [count]);
//     useEffect(() => {
//         console.log("runs when toggle changes", { toggle });
//     }, [toggle]);
//     return (
//         <div>
//             <button onClick={() => setCount(count + 1)}>Increase</button>
//             <div>{count}</div>
//             <button onClick={() => setCount(count - 1)}>Decrease</button>
//             <div>
//                 <button onClick={() => setToggle(!toggle)}>Toggle</button>
//             </div>
//         </div>
//     )
// }

// export default TaskCard