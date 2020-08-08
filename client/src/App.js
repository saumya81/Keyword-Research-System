import React from 'react';

import './App.css';

import axios from 'axios';
axios.defaults.baseURL='http://localhost:4000'
class App extends React.Component{
  state={
      res:[],
      number:0,
      finalnumber:0
   };
  
  async componentDidMount(){
   
   fetch("http://localhost:4000/test")
      .then(response => response.json())
      .then(res => {
        this.setState({ res:res });
  
  });
 

  

 
  }
  
render() {
  const numberEvent=(event)=>{

    this.setState({number:event.target.value });
  }
  const numberfinalEvent=(event)=>{

    this.setState({finalnumber:this.state.number});
  }
  let numret = [];
  const wordlis = () => {
    if(this.state.finalnumber<=325)
    for (let i = 0; i < this.state.finalnumber; i++) {
      numret.push(<tr> <td>{!!this.state.res.length &&this.state.res[i].word}</td> <td>{this.state.res.length &&this.state.res[i].frequency}</td></tr>);
    }
    return numret;
  };
  const error1 = () =>{
    return(<h5>OOPS that number is larger than the number of words we have</h5>);
  };

 
  const { res } = this.state;
  return (
    <div className="App">
      <header className="App-header">
        <div className="head"><h1>WELCOME</h1></div>
      <h2>Top words in the paragraph with their frequency</h2>
      <h3>Mention the number of words whose frequency you want to know</h3>
      <input type="number"  onChange={numberEvent}  /><br></br>
      
    <span> <button onClick={numberfinalEvent}  >Submit</button></span> <br></br>
  <div className="container1">
     <table id="simple-board">
       <thead>
         <th>WORD</th>
         <th>FREQUENCY</th>
       </thead>
               <tbody>
               {(this.state.finalnumber>325)&&error1()}  
               {(this.state.finalnumber<=325)&&wordlis()}
               </tbody>
             </table>
             <br></br>
             </div>   
      </header>
    </div>
  );
}
}

export default App;
