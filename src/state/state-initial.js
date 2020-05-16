import React from "react";


class InitialState extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            foo: 'Hello World'
        }
    }
    render(){
        return(
        <h1>{this.state.foo}</h1>
        )
    }
}
export default InitialState;

