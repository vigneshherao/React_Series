import React from "react";
import Child from "./Child";
import ChildofChild from "./ChildofChild";
const text1 = "This is Child Class Props 1";
const text2 = "This is Child Class Props 2";
class UserClass extends React.Component{


    constructor(){
        super();

        console.log("Parents constructor is called");
        
    }

    componentDidMount(){
        console.log("Parents componenet did mount is called");
    }
    

    render(){
        console.log("Parents render is called");
        return (
            <div>
                <Child label={text1}/>
                <Child label={text2}/>
                <ChildofChild label={text1}></ChildofChild>
            </div>
            
        )
    }
}



export default UserClass;