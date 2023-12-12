import React, {useState, useEffect} from 'react';
import { useLocation } from 'react-router-dom';
import { database } from '../appwrite/config';
import { useNavigate } from 'react-router-dom';


const UpdateNote = ({note}) => {
  const navigate = useNavigate()
  const { state } = useLocation();
  console.log(state)

  const [updatedNote, setupdatedNote] = useState({
    noteTitle: '',
    noteContent: '', 
  });

  const updateNote = async (e) => {
    e.preventDefault();
    console.log(updatedNote);
    await database.updateDocument(state.$databaseId, state.$collectionId
      , state.$id
      , updatedNote);
    console.log('successful')
    navigate('/Dashboard')
  };

   useEffect(()=>{
    if (state) {
      setupdatedNote({
        noteTitle: state.noteTitle,
        noteContent: state.noteContent,   
     });
   }
   }, [])
 


  return (
    <div className='update_container'>
       <form>
        <div className="mb-2">
          <label className="form-label">
            Note Title
          </label>
          <input
            type="text"
            className="form-control"
            onChange={(e) =>
              setupdatedNote({
                ...updatedNote,
                noteTitle: e.target.value,
              })
            }
            value={updatedNote.noteTitle}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">
            Note Content
          </label>
          <textarea
            className="form-control"
            rows="10"
            onChange={(e) =>
              setupdatedNote({
                ...updatedNote,
                noteContent: e.target.value,
              })
            }
            value={updatedNote.noteContent}
          ></textarea>
        </div>
        <button
          type="submit"
          className="btn btn-primary"
          onClick={(e) => updateNote(e)}
        >
          Update Note
        </button>
        </form>
    </div>
  )
}

export default UpdateNote
