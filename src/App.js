import logo from './logo.svg';
import './App.css';
import { Button } from '@mui/material';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Learn Material UI</p>
        <Button  style={{fontSize: 20, color: "red", background: "white"}} size="large" onClick={()=> alert("Hello World")} variant='contained' color="primary"> 
        Material Button
        </Button>
        
         
      </header>
    </div>
  );
}

export default App;
