import React, { Component } from 'react';
export default class Class2 extends Component {

    //run ones after the components is mounted.
    componentDidMount(){
        console.log("Component Did Mount");
    }

    stste= {count :0 , conts1: 0};
    // runs multiple time when the state are updated
    componentDidUpdate(prevProps,prevState){
        console.log("Component Did Update");
    }

    //runs once before the component is unmounted or go to one page to other page
    componentWillUnmount(){
        console.log("Component Will Unmount");
    }

    render()
    {
       // console.log("Hello from Class Component"); component did mount
          return (
            <div>
                <h1 style={{color:"red"}}>Class 1</h1>
                <p>{this.state.count}</p>
                <button onClick={() => { this.setState({ count: this.state.count + 1 }) }}>Update count</button>
            </div>
        )
    }
} 
