import React,{useState} from 'react';
import Navbar from './Components/Navbar'; 
import Textarea from './Components/Textarea';
import './App.css';
// import About from './Components/About';

function App() {

  const [Mode, setMode] = useState( "light");

  const toggleMode = () => {

    if (Mode ==="dark") {
     
      setMode("light");
      
      document.body.style.backgroundColor= "white"
      
    } else {
      
     
      setMode("dark");

      document.body.style.backgroundColor= "#123456"
  
    }
    
  }

 
  return (
    <>  
    <Navbar  titles="Harish" Mode={Mode} toggleMode={toggleMode}/>
    <div className="container my-3">
    <Textarea headings= "Enter your data to Analyze" Mode={Mode}  />
  {/* <About/> */}
    </div>

    

    
    
    </>
  );
}

export default App;
