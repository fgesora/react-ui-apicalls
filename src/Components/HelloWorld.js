import React from "react";

class HelloWorld extends React.Component{
    render(){
        return (
            <h1>Test {this.props.name}</h1>
        )
    }
}

function Hello(props){
    return(
        <h2>Test {props.name}</h2>
    )
}

export default HelloWorld