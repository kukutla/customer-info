
import "@fortawesome/fontawesome-free/css/all.min.css";
import './App.css';
import './bootstrap.css';
import { useEffect,useState } from 'react';
import NotesList from './containers/notesList';
import AddNewNote from './containers/addNotes';
import { useDispatch,useSelector } from "react-redux";
import { editCustomerData, initGetNotesData,deleteCustomerData} from './containers/notesList/store/action'
import { initSaveNotesValue } from './containers/addNotes/store/actions';

function App() {
const dispatch = useDispatch()
const {notesList,isNotesFetching}=useSelector(state=>state.GetListReducer)
const {success}=useSelector(state=>state.AddNotesReducer)
const [noteName,setNotesName] = useState("")
const [email,setEmail] = useState("")
const [editItem,setEditItem] = useState(false)
const [id,setId] = useState("")

const handleChangeNote = (event) => {
   const {value} = event.target;
    setNotesName(value);
}
const handleChangeEmail = (event) => {
    const {value} = event.target;
     setEmail(value);
 }
const handleSubmit = () => {
  console.log("handleSubmit",editItem);
  if(editItem){
  const customer ={name:noteName,email,id}
    dispatch(editCustomerData(customer));
  }
  else{ 
    console.log("noteName ",noteName,"email ",email);
    if(noteName.trim !== '' && email.trim !== '')   
      dispatch(initSaveNotesValue(noteName,email));
  }
  clearValues();  
}
function clearValues () {
  setEditItem(false)
  setEmail("")
  setNotesName("")
  setId("")
}
function handleEdit(item) {
  setEditItem(true)
  setEmail(item.email)
  setNotesName(item.name)
  setId(item.id)
}
function handleDelete(item) {
 
  dispatch(deleteCustomerData(item.id));
  clearValues();
}

useEffect(() => {
    dispatch(initGetNotesData())
},[success])

  return (
    <div className="App">
     <ul>
            <li><AddNewNote  noteName={noteName}
                email={email}
                editItem={editItem}
                handleChangeNote={handleChangeNote}
                handleChangeEmail={handleChangeEmail}
                handleClickNotes={handleSubmit}/>  </li>
            <li> <NotesList notesList={notesList}
                handleEdit={handleEdit}
                handleDelete={handleDelete}/></li>                    
     </ul>     
    </div>
  );
}

export default App;
