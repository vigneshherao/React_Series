import React from "react";
import Child from "./Child";
import ChildofChild from "./ChildofChild";
import { Link } from "react-router-dom";
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
                <Link to={"/child"}><button>Child</button></Link>
            </div>
            
        )
    }
}



export default UserClass;