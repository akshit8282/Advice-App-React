import React, { Component } from 'react'

import './App.css'
import Axios from 'axios'
export class App extends Component {
  state={
    advice:null
  }
  componentDidMount(){
   this.advicefetcher();
  }
  advicefetcher=()=>{
    this.setState({advice:null})
    Axios.get('https://api.adviceslip.com/advice').then(res=>{
      const {advice}=res.data.slip;
      this.setState({advice:advice});
      
    }).catch(err=>{
      console.log(err);
    })
  }
  render() {
    



    const post=this.state.advice?this.state.advice:"Loading";


    return (
      <div className="app">
  <div className="card">
    <h1 className="heading">{post}</h1>
    <button className="button" onClick={this.advicefetcher}>Give Me Advice!!</button>
  </div>
</div>
     
    )
  
}
}

export default App
