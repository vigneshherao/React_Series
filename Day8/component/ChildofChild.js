import { Component } from "react";
class ChildofChild extends Component{


    constructor(props){
        super(props);
        this.state = {
            user : {
                name:"dummy",
                location:"dasfsa"
            }
        }
        console.log("child constreuctor is called")

    }


   async componentDidMount(){
        const data = await fetch("https://api.github.com/users/vigneshherao");
        const dataJson = await data.json();
        this.setState({
            user:dataJson,
        })

        console.log("chidl did mount is called")

        this.timer = setInterval(() => {
            console.log("internal");
        }, 1000);
    }

    componentDidUpdate(){
        console.log("child is updated");

    }





    componentWillUnmount(){
        console.log("unmounted the chil")
         clearInterval(this.timer)
    }
    render(){
        const {name,location} =  this.state.user;
        console.log("child render is called")
        return (
            <div>
                <h3>{name}</h3>
                <h2>{location}</h2>
            </div>
        )
    }
}


export default ChildofChild;