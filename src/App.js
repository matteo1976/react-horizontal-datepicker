import React from 'react';
import './App.css';
import DatePicker from "./components/DatePicker";

function App() {
    const selectedDay = (val) =>{
        console.log(val)
    };
  return (
    <div className="App">
    <div style={{width:"50%", margin:"auto"}}> 
      <DatePicker getSelectedDay={selectedDay} shouldScroll={false}  />
    </div>
    </div>
  );
}

export default App;
