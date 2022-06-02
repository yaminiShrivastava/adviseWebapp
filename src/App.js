import React from "react";  
import './App.css'
import axios from 'axios'
class App extends React.Component{
    state={
        advice:''
    };
    componentDidMount(){
        console.log('component did mount');
        this.fetchAdvice();
    }
    fetchAdvice=()=>{
        axios.get('https://api.adviceslip.com/advice')
        .then((response)=>{
            const {advice}=response.data.slip;
            // console.log(advice);
            this.setState({advice})
        })
        .catch((error)=>{
            console.log(error);
        })
    }
    render(){
        
        console.log('render()');
        const {advice}=this.state;
        return (
            <div className="main">
            <div className="card">
            <div className="advice">{advice}</div>
            <button onClick={this.fetchAdvice}><span>
            Give Advice
            </span>
                </button>
            </div>
            </div>
            
        );
    }
}
export default App;
