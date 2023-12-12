import React, { useState, useEffect, useRef } from 'react';
import { account, database } from '../appwrite/config';
import { useNavigate } from 'react-router-dom';
import { Query } from 'appwrite';



const Dashboard = () => {
  const Navigate = useNavigate();
  const [email, setEmail] = useState();
  const [name, setName] = useState();
  const [noteTitle, setNoteTitle] = useState("");
  const [noteContent, setNoteContent] = useState("");
  const [allNote, setAllNote] = useState([]);
  const ref = useRef(null);

  // const handleLogout = () => {
  //   // Implement your logout logic here
  //   logout()
  //   alert('Logout button clicked!');
  // };

  useEffect(() => {
    isLogin();
  })

  const isLogin = async () => {
    try {
      var x = await account.get('current')
      setEmail(x.email);
      setName(x.name);
      viewAllNotes();
    }
    catch (e) {
      Navigate('/Login')
    }
  }

  const logout = async () => {
    try {
      var x = await account.deleteSession('current')
      console.log(x)
      Navigate('/Login')
    }
    catch (e) {
      console.log(e)
    }
  };

  

  const addNote = async () => {
    if (noteTitle === "" || noteContent === "") {
      alert('Enter new note...')
    } else {
      try {
        var x = await database.createDocument('6574b468281552465968',
          '6574b4cfd58de8710d19',
          'unique()', {
          Email: email,
          noteTitle: noteTitle,
          noteContent: noteContent,
        })
        console.log(x)
      }
      catch (e) {
        console.log(e)
      }
    }
    ref.current.value = '';
  }

  

  const viewAllNotes = async () => {
    try {
      var x = await database.listDocuments('6574b468281552465968', '6574b4cfd58de8710d19', [
        Query.equal('Email', email)
      ])
      console.log(x.documents)
      setAllNote(x.documents)
    }
    catch (e) {
      console.log(e)
    }
  }


  const handleUpdateNote = (note) => {
    Navigate('/updatenote', { state: note })

  }

  const deleteNote = async (id) => {
    try {
      var x = await database.deleteDocument('6574b468281552465968', '6574b4cfd58de8710d19', id)
      console.log(x)
    }
    catch (e) {
      console.log(e)
    }
  }



  return (
    <div className='main_dashboard'>
      <div className="dashboard">
        {email && name ? <>
          <h1 className='dashboard_name'>Welcome, {name}</h1>
          <p className='dashboard_email'>{email}</p>
          <button className="logout-button" onClick={logout}>
            Logout
          </button>
          <br></br>
          <br></br>
          
            <div className="mb-3">
              <label className="form-label">Note Title </label>
              <input  ref={ref} type="text" className="form-control" placeholder="Enter note title..." onChange={(e) => setNoteTitle(e.target.value)} />
            </div>
            <div className="mb-3">
              <label className="form-label">Note Content</label>
              <textarea  ref={ref} className="form-control" rows="10" placeholder="Enter note content..." onChange={(e) => setNoteContent(e.target.value)}></textarea>
            </div>
            <button onClick={addNote} className="btn btn-primary">Add Note</button>
          
        </> : <>
          <h1>Loading...</h1>
        </>}
      </div>
      {allNote != [] ? <div>
        {
          allNote.map((note) => {
            return (
              <div className="row row-cols-1 row-cols-md-2 g-4">
                <div className="col">
                  <div className="card" style={{ width: '28rem', height: 'auto', marginBottom: '20px' }}>
                    <div className="card-body">
                      <h5 className="card-title">{note.noteTitle}</h5>
                      <p className="card-text">{note.noteContent}</p>
                      <div>
                        <button type="button" className="btn btn-primary" style={{ marginRight: '8px' }} onClick={() => { handleUpdateNote(note) }}>
                          Update
                        </button>
                        <button type="button" className="btn btn-danger" onClick={() => { deleteNote(note.$id) }}>
                          Delete
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
          })
        }
      </div> : <></>}
    </div>
  );
};

export default Dashboard;

