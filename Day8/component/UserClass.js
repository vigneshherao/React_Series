import React from "react";
import Child from "./Child";
import ChildofChild from "./ChildofChild";
class UserClass extends React.Component{


    constructor(){
        super();
        this.state= {
            text1 :"This is Child Class Props 1"
        }
        console.log("Parents constructor is called");
        
    }

    async componentDidMount(){

        console.log("parent did mount is called")
    }
    

    render(){
        console.log("Parents render is called");
        return (
            <div>
                <ChildofChild label={this.state.text1.name}></ChildofChild>
                <button onClick={""}>Child</button>
            </div>
            
        )
    }
}



export default UserClass;