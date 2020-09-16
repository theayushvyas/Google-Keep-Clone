import React from 'react';
import icon from './icon.png'
import Time from "./Time";

const Header =() =>{
	return (
		<>
   <div className = "Header">
	<img src = {icon} alt="logo"/> 
   &nbsp;<h1> @nPhet Keep </h1>

   <div className = "clock">
     	<Time/>
  </div>
   	</div>



	</>
)}

export default Header;