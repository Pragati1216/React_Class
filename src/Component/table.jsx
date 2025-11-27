const Table=()=>{

  let student1={name:"Rahul",age:23,city:"pune"}
  let student2={name:"Rohan",age:23,city:"pune"}
  let student3={name:"Sohan",age:23,city:"pune"}
  let student4={name:"Nikhil",age:23,city:"pune"}
  let student5={name:"Raju",age:23,city:"pune"}
  let student6={name:"Aman",age:23,city:"pune"}
  let student7={name:"Sahil",age:23,city:"pune"}
  let student8={name:"Sagar",age:23,city:"pune"}
  let student9={name:"Harsh",age:23,city:"pune"}
  let student10={name:"Rohit",age:23,city:"pune"}

    let arr=["pragati","Sanika","Snehal","Pooja","Sayali"];

    let students=[
        {name:"Rahul",age:23,city:"pune"}
        ,{name:"Rohan",age:23,city:"pune"}
        ,{name:"Sohan",age:23,city:"pune"}
        ,{name:"Nikhil",age:23,city:"pune"}
        ,{name:"Raju",age:23,city:"pune"}
        ,{name:"Aman",age:23,city:"pune"}
        ,{name:"Sahil",age:23,city:"pune"}
        ,{name:"Sagar",age:23,city:"pune"}
        ,{name:"Harsh",age:23,city:"pune"}
        ,{name:"Rohit",age:23,city:"pune"}
    ]
    return(
        <div>
            <h1>Student Table</h1>
            <table className="table">
                <tr>
                    <th>Name</th>
                    <th>Age</th>
                    <th>City</th>
                </tr>
                
                <tr>
                    <td>{student1.name}</td>
                    <td>{student1.age}</td>
                    <td>{student1.city}</td>
                </tr>

                <tr>
                    <td>{student2.name}</td>
                    <td>{student2.age}</td>
                    <td>{student2.city}</td>
                </tr>

                <tr>
                    <td>{student3.name}</td>
                    <td>{student3.age}</td>
                    <td>{student3.city}</td>
                </tr>

                <tr>
                    <td>{student4.name}</td>
                    <td>{student4.age}</td>
                    <td>{student4.city}</td>
                </tr>

                <tr>
                    <td>{student5.name}</td>
                    <td>{student5.age}</td>
                    <td>{student5.city}</td>
                </tr>

                <tr>
                    <td>{student6.name}</td>
                    <td>{student6.age}</td>
                    <td>{student6.city}</td>
                </tr>
                <tr>
                    <td>{student7.name}</td>
                    <td>{student7.age}</td>
                    <td>{student7.city}</td>
                </tr>
                <tr>
                    <td>{student8.name}</td>
                    <td>{student8.age}</td>
                    <td>{student8.city}</td>
                </tr>
                <tr>
                    <td>{student9.name}</td>
                    <td>{student9.age}</td>
                    <td>{student9.city}</td>
                </tr>
                <tr>
                    <td>{student10.name}</td>
                    <td>{student10.age}</td>
                    <td>{student10.city}</td>
                </tr>
            </table>



            <h2>Student List</h2>
            <ol>
                <li>{arr[0]}</li>
                <li>{arr[1]}</li>
                <li>{arr[2]}</li>
                <li>{arr[3]}</li>
            </ol>

            <h2>Students Data from Array of Objects</h2>
            <table>
                <tr>
                    <th>Name</th>
                    <th>Age</th>
                    <th>City</th>
                </tr>

                <tr>
                    <td>{students[0].name}</td>
                    <td>{students[0].age}</td>
                    <td>{students[0].city}</td>
                </tr>

                <tr>
                    <td>{students[1].name}</td>
                    <td>{students[1].age}</td>
                    <td>{students[1].city}</td>
                </tr>
                <tr>
                    <td>{students[2].name}</td>
                    <td>{students[2].age}</td>
                    <td>{students[2].city}</td>
                </tr>
                <tr>
                    <td>{students[3].name}</td>
                    <td>{students[3].age}</td>
                    <td>{students[3].city}</td>
                </tr>
                <tr>
                    <td>{students[4].name}</td>
                    <td>{students[4].age}</td>
                    <td>{students[4].city}</td>
                </tr>
                <tr>
                    <td>{students[5].name}</td>
                    <td>{students[5].age}</td>
                    <td>{students[5].city}</td>
                </tr>

                <tr>
                    <td>{students[6].name}</td>
                    <td>{students[6].age}</td>
                    <td>{students[6].city}</td>
                </tr>
                <tr>
                    <td>{students[7].name}</td>
                    <td>{students[7].age}</td>
                    <td>{students[7].city}</td>
                </tr>
                <tr>
                    <td>{students[8].name}</td>
                    <td>{students[8].age}</td>
                    <td>{students[8].city}</td>
                </tr>
                <tr>
                    <td>{students[9].name}</td>
                    <td>{students[9].age}</td>
                    <td>{students[9].city}</td>
                </tr>
                
            </table>

            <h2>Get Students Data from Array of Objects using Map Function</h2>

            <table>
                <tr>
                    <th>Name</th>
                    <th>Age</th>
                    <th>City</th>
                </tr>

               {
                 students.map((item)=>{
                     return <tr>
                    <td>{item.name}</td>
                    <td>{item.age}</td>
                    <td>{item.city}</td>
                </tr>
                    
                })
               }
            </table>
        </div>

       
        
    )
}

export default Table;