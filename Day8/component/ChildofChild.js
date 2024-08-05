import { Component } from "react";
class ChildofChild extends Component{


    constructor(props){
        super(props);
        console.log(this.props.label + "constructor");
        this.state = {
            count : 0
        }

    }


    componentDidMount(){
        console.log(this.props.label +"did mount");
        this.setState({
            count:this.state.count +1
        })
    }

    componentDidUpdate(){
        console.log("is updated");
    }


    



    render(){
        const {label} =  this.props;

        return (
            <div>
                <h3>{label}</h3>
                <h2>Count is : {this.state.count}</h2>
            </div>
        )
    }
}


export default ChildofChild;