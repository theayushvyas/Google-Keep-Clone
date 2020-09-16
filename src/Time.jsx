import React,{useState} from "react";

const Time = () =>{
     let time = new Date().toLocaleTimeString();

	const[ctime,setTime] = useState(time)


const utime = () =>{
   time = new Date().toLocaleTimeString();
   setTime(time);	
}

setInterval(utime,1000);
	return(
		<>
		<h1>{ctime}</h1>
		
		</>
		);
	}

export default Time;

//<button onClick={utime}>Get Time</button>