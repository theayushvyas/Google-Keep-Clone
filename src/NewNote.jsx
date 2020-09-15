import React, {useState} from 'react';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';


 const NewNote = (props) =>{

 	const [expand,setExpand] = useState(false);

 const [note,setNote] = useState({
 	title:"",
 	content:"",
 	});

const inputEvent = (event) =>{

   const {name,value} = event.target;
	
	setNote((prevData) => {
		return{
		...prevData,
		[name]:value,
};
});
};
const addEvent = () =>{
   props.passNote(note);
   
   setNote({
 	title:"",
 	content:"",
 	});
}

const expandIt = () =>{

	setExpand(true);
}

const shrink = () =>{
setExpand(false);
}

 return(
 <>
<div className = "main_note" onDoubleClick = {shrink}>
<form>

{expand? (
<input 
type="text"
name ="title"
value={note.title}
onChange={inputEvent}
 placeholder = "Title"
 autoComplete ="off"
 /> 
 ) : null}

<textarea 
rows = "" 
column ="" 
name="content"
value={note.content}
onChange={inputEvent}
placeholder="Write a Note..."
onClick = {expandIt}
>
</textarea>
<br/>
{expand ?
<Button onClick={addEvent}>
<AddIcon className="plus_sign"/>
</Button> : null}
</form>
</div>
 </>)
 }

 export default NewNote;