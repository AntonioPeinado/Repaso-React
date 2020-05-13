import React from "react";
import ReactDOM from "react-dom";

function Foo (){
  throw new Error('error');
  
}
class BarreraDeErrores extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      error: false
    }
  }
  componentDidCatch(err){
    this.setState({
      error:err
    });
  }
render(){
  if(this.state.error){
    return <div roller='alert'>Ha ocurrido un error inesperado</div>;
  }
  return this.props.children;
}
}

class LifeCycle extends React.Componet {

  constructor(props){
    super(props);
    this.state={
      value:1
    };
    console.log("constructor");
  }
  componentDidUpdate(prevProps, prevState){
    console.log('update');
   }
  
  componentDidMount(){
    this._interval = setTimeout(() => {
    this.setState({
      value:this.state.value + 1
    })
    }, 2000);
    console.log('mount')
  }
  componentwillUnmount(){
    clearInterval(this._interval);
    console.log('unmount');
  }
  componentDidCatch(err, stack){
    window.alert('Ha ocurrido un erro, pronto se solucionará');
   
  }
  render() {
    console.log('render');
  return (
    <div>
      <h1>
        Hello! {this.props.name} {this.state.value}
      </h1>
      <BarreraDeErrores>
        <Foo></Foo>
      </BarreraDeErrores>
    </div>
  ); 
    
          
  }
}
ReactDOM.render(
  <React.StrictMode>
    <LifeCycle name='Antonio' />
  </React.StrictMode>,
  document.getElementById("root")
);
/*
setTimeout(() => {
  ReactDOM.unmountComponentAtNode(
    document.getElementById('root')
  );
},4000);
*/