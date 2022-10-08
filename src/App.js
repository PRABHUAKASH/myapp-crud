import React, { useState, useEffect } from "react";
import Student from "./Student";
import Teacher from "./Teacher";
import Button from '@mui/material/Button';
import {BrowserRouter,Routes,Route,Link} from 'react-router-dom';


function App(){

  

  return(
    <div style={{backgroundcolor:"grey"}}>

      <h2 style={{textAlign:"center",color:"Red",border:"2px solid  black",padding:"100px",backgroundColor:"skyblue"}}>ADMIN DASHBOARD
      </h2>
      
      
      
      <BrowserRouter>
            <Routes>
           
                <Route path="/" element={<Student/>}></Route>
                <Route path="/teacher" element={<Teacher/>}></Route>
              
            </Routes>
            </BrowserRouter>

     
      

       
       
    

         
      
      
    </div>
  );

};

export default App;