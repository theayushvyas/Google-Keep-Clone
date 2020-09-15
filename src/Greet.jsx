import React from 'react';


let curTime = new Date();
curTime = curTime.getHours();
let greeting = "";
const cssStyle = {};


if (curTime >= 4 &&curTime < 12){
	greeting = ",Good Morning";
	cssStyle.color = "lightgreen";
}
else if (curTime >= 12 && curTime < 16){
	greeting = ",Good Afternoon";
	cssStyle.color = "orange";
}

else if (curTime >= 16 && curTime <= 22){
	greeting = ',Good Evening';
	cssStyle.color = "skyblue";
}
else {
	greeting = ",Time to sleep, Good Night";
	cssStyle.color = "black";
}




const Greet = () =>{

return(
<div className="time">
<h1 className="Greet">Hey Pal <span style={cssStyle}>{greeting} </span> </h1>
</div>

)} 

export default Greet;