import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {age,demo,city} from './new2.jsx';
import Navbar from './Component/navbar.jsx';
import Table from './Component/table.jsx';
import Basic from './new.jsx';
import Class2 from './Component/Class/class2.jsx';
import Lifecycle from './Component/Function/Lifecycle.jsx';
import State from './Component/Function/Hooks.jsx';
import Task from './Component/Function/Task.jsx';

//  in react component  is reuseble ,independant piece of code UI, that can include html ,css ,js logic.


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        {/* <Navbar/>
      <div className='Tag'> Hello , Pragati</div>
        <Table/>
        <Basic/>
        <Class2/>  */}

        {/* <Lifecycle/> */}
         {/* <State/> */}

         <Task/>
      
    </>
  )
}

export default App
