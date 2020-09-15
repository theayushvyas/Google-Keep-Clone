import React,{useState} from 'react';
import './App.css';
import Header from "./Header";
import Footer from "./Footer";
import NewNote from"./NewNote";
import Note from "./Note";
import Greet from "./Greet";




const App = () => {

   const [addItem,setAddItem] = useState([]);



  const addNote = (note) => {

      setAddItem((prevData) => {
      return [...prevData, note];
       }); 
  };  

  const onDelete = (id) => {
    setAddItem((prevData) =>
      prevData.filter((currData,index)=>{
        return index !== id;
        })
  );
  };
  return (
 <>
 <Header/>
 <Greet/>
 <NewNote passNote = {addNote}/>

{addItem.map((val,index) => {
  return( 
    <Note
     key={index}
     id={index}
     title={val.title}
     content={val.content}
     deleteItem = {onDelete}
     />
     );
})}

 <Footer/>
 </>
  );
}

export default App;
