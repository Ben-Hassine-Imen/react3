import './App.css';
import React from "react";
import ProfilPhoto from './component/profil/ProfilPhoto';
import FullName from './component/profil/FullName';
import Adress from './component/profil/Adress';




const  App = () => {
  return (
    <div>
  
       <ProfilPhoto/>
     
       <FullName/>
      
       <Adress/>
  
    </div>
  );
}

export default App;

