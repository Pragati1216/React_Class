import React, { useState } from 'react';
import img from '../../assets/download.jpeg';
import img2 from '../../assets/image.jpeg';

export default function State(){
    
 // useState-> it is a react hook which is used to manage the state in functional component.    
    const [data, setData]= useState(0);
    const [changeImg, setChangeImg]= useState(true);

    const add=()=>{
        setData(data + 1);
    }

    const remove=()=>{
        setData(data - 1);
    }

    const [name, setName]= useState("Pragati");
    const [changeC,setChanges]= useState("red");
    const changeName=()=>{
        setName("Sanika");
    }


    return(
        <div>
            <h1>Counter</h1>
            <h1> {data} </h1>
            {/* <button onClick={ ()=> {setData(data + 1)} }>Add</button>
            <button onClick={()=>{setData(data-1)}}>Remove</button> */}
            <button onClick={add}>Add</button>
            <button onClick={remove}>REmove</button>

                <h1>Task</h1>
            <p style={{color:changeC,fontSize:50}}>{name}</p>
            <button onClick={changeName}>Change_Name</button>
            <button onClick={()=>{setChanges("Green")}}>Change Color</button>

            <h1>Images Change</h1>

            {
                changeImg?<img src={img}/> : <img src={img2} />
            }
            <button onClick={()=>{setChangeImg(false)}}>ChangeImages</button>
        </div>
    )
}