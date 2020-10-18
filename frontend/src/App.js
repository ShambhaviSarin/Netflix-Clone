import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
function App() {

  const [movie,setMovie] = React.useState("");
  const [resp,setResp] = React.useState(null);
  const getMovies = async () => {
    try{
      const response = await axios.get("http:localhost:5000/movie", { params: { title: movie } })
      console.log("resp is ", response);
      setResp(response);
    } catch(error){
      console.log(error);
    }
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <input type="text" value={movie} label = "Enter Movie Name" onChange={(e) => setMovie(e.target.value)}/>
        <button onClick={getMovies}>Get Recommendations</button>
        {resp===null ? <h1>No Movie Found</h1>: <h1>Movie Found</h1> }
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
