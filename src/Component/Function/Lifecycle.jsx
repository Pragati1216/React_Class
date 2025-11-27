import { useEffect,useState } from "react";

function Lifecycle() {
     const [count, setCount]=useState(0);
    useEffect(()=>{
        console.log("Function Component Did Mount");

        return()=>{
            console.log("Function Component Will Unmount");
        }
    },[count]);
    return (
        <div>
            <p>{count}</p>
            <h2>Function Componente Life Cycle</h2>
            <button onClick={()=>{setCount(count+1)}}>count</button>
        </div>
    )
}

export default Lifecycle;