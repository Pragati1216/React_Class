import React, { useState } from "react";

 export default function Task(){
    const[chnage , setChange]=useState(true);
    const [para,setpara]=useState("pragati nangare");
    const[colorp, setclor]=useState("red");
    const[style,setStyle]=useState({color:"green"});
    const[chnagePra, setChnagePara]=useState({color:"black", fontSize:"16px"});

    const [chnagebtn, setChnagebtn]=useState({backgroundColor:"pink", height:"300px", width:"200px",border:"2px solid black"});

    const[theme, setTheme]=useState(true);
    const[bull,setlight]=useState(true);
    var name="Table Creation Using React";
    var userList=[
        {id:1, name:"Pragati", age:22},
        {id:2, name:"Sanika", age:21},
        {id:3, name:"Ankita", age:23},
        {id:4, name:"Snehal", age:22},
    ];

    let students={
        student :true,
        studentData:[
        {name:"Rahul",age:23,city:"pune"}
        ,{name:"Rohan",age:23,city:"pune"}
        ,{name:"Sohan",age:23,city:"pune"}
        ,{name:"Nikhil",age:23,city:"pune"}
        ,{name:"Raju",age:23,city:"pune"}
        ],
        teacherDAta:[
        {name:"Aman",age:23,city:"pune"}
        ,{name:"Sahil",age:23,city:"pune"}
        ,{name:"Sagar",age:23,city:"pune"}
        ,{name:"Harsh",age:23,city:"pune"}
        ,{name:"Rohit",age:23,city:"pune"}
    ]}

    


    return(
        <div>
            <h1>{name}</h1>
            <h2>simple Method</h2>
            <table>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Age</th>
                </tr>

                <tr>
                    <td>{userList[0].id}</td>
                    <td>{userList[0].name}</td>
                    <td>{userList[0].age}</td>
                </tr>
                 <tr>
                    <td>{userList[1].id}</td>
                    <td>{userList[1].name}</td>
                    <td>{userList[1].age}</td>
                </tr>
                 <tr>
                    <td>{userList[2].id}</td>
                    <td>{userList[2].name}</td>
                    <td>{userList[2].age}</td>
                </tr>
                 <tr>
                    <td>{userList[3].id}</td>
                    <td>{userList[3].name}</td>
                    <td>{userList[3].age}</td>
                </tr>
            </table>

            <h2>Using Map Funtion</h2>
            <table>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Age</th>
                </tr>
                {
                    userList.map((item)=>{
                        return(
                            <tr>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.age}</td>
                            </tr>
                        )
                    })
                }
            </table>

            <h2>Conditional Rendering</h2>
            {
                chnage?
                 <div>
                    <h3>Student Data</h3>
                    <table>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Age</th>
                </tr>
                {
                    students.studentData.map((item)=>{
                        return(
                            <tr>
                                
                                <td>{item.name}</td>
                                <td>{item.age}</td>
                                <td>{item.city}</td>
                            </tr>
                        )
                    })
                }
            </table>

                 </div>

                :<div>
                    <h3>Teacher Data</h3>
                    <table>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Age</th>
                </tr>
                {
                    students.teacherDAta.map((item)=>{
                        return(
                            <tr>
                                <td>{item.name}</td>
                                <td>{item.age}</td>
                                <td>{item.city}</td>
                            </tr>
                        )
                    })
                }
            </table>
                </div>
                
            }
            <button onClick={()=>{setChange(!chnage)}}>ChangeData</button>
            <p style={{color:colorp}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, delectus perferendis? 
                Accusantium eligendi praesentium ipsa odit aperiam illo saepe, dolorum at numquam nemo, error vel, harum ut itaque nostrum nobis!</p>
            <button onClick={()=>{setclor("blue")}}>chnageColor</button>

            <p style={style}>hello , I am Pragati. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut inventore eos, labore dolorum
                 molestias libero quidem incidunt sunt. At facere maxime neque deserunt perferendis possimus minus expedita in corrupti adipisci.</p>
            <button onClick={()=>{setStyle(
                {color:"purple",
                     fontSize:"25px", 
                     fontWeight:"bold"}
            )}}>Change_Style</button>


            <p style={{color:chnagePra.color, fontSize:chnagePra.fontSize}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis dicta animi maiores odit quidem. Distinctio esse aliquid tempora 
                vitae laudantium aut! Cumque accusantium ullam, minus recusandae porro laborum harum amet!</p>
            <button onClick={()=>{setChnagePara(
                {
                    color:"orange",
                 fontSize:"20px"
                }
            )}}>clickMe</button>



            <div style={chnagebtn}>Mode</div>
            <button onClick={()=>{setChnagebtn(
                {
                    backgroundColor:"black",
                    height:"300px",
                    width:"200px",
                    border:"2px solid white", 
                    color:"white"
                }
            )}}>Dark</button>


            <div style={{height:"300px",width:"200px",backgroundColor:theme?"white":"black",border:"2px solid black"}}>

            </div>
            <button onClick={()=>{setTheme(!theme)}}>{theme?"Dark":"Light"}</button>


            <div style={{height:"200px",width:"200px",border:"2px solid black",borderRadius:"100px",backgroundColor:bull?"yellow":"white"}}></div>
            <div style={{height:"50px",width:"150px",border:"2px solid black",marginLeft:"20px", backgroundColor:"gray"}}></div>
            <div style={{height:"150px",width:"100px",border:"2px solid black",marginLeft:"45px",backgroundColor:"gray"}}></div>
            
            <button onClick={()=>{setlight(!bull)}}>{bull?"Off":"ON"}</button>
        </div>
    )
}