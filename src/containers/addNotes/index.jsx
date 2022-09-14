import { Component } from 'react';
import './style.css'

export default class AddNewNote extends Component {
    render() {
    const {noteName,email,editItem,handleChangeNote,handleChangeEmail,handleClickNotes} = this.props
       
    return(
        
        <div className="card card-body my-3">
             <div className="input-group">
          <div className="input-group-prepend">
            <div className="input-group-text bg-primary text-white">
              <i className="fas fa-book" />
            </div>
          </div>
          <input placeholder='Enter Customer Name' value = {noteName} onChange={handleChangeNote}/>
          <input type={'email'} placeholder='Enter Email' value = {email} onChange={handleChangeEmail}/>
        <button type="submit" onClick={handleClickNotes} disabled={noteName.trim === '' || email.trim === ''}
className={editItem ?"btn btn-block btn-success mt-3 text-uppercase":"btn btn-block btn-primary mt-3 text-uppercase"}>{editItem?"Edit Customer":"Add Customer"}</button>
    </div>
      </div>
    )
}
}
