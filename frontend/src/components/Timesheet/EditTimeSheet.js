import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux';
import shortid from 'shortid';
import { useHistory } from 'react-router';
import { editTime } from '../../Actions/EditTimeAction';

export default function EditTimeSheet() {
    let history=useHistory();
    const dispatch=useDispatch();
    const [name,setName]=useState("");
    const [phone,setPhone]=useState("");
    const [email,setEmail]=useState("");

    const editContact=(e)=>{
        e.preventDefault();
        const updatedContact={
            id:shortid.generate(),
            name:name,
            phone:phone,
            email:email
        };
        dispatch(editTime(updatedContact));
        history.push("/");
    }
    
    return (
        <div className="card border-0 shadow">
            <div className="card-header">
                Add your time!
            </div>
            <div className="card-body">
                <form onSubmit={(e)=>editContact(e)}>
                    <div className="form-group">
                        <input 
                            type="text" 
                            className="form-control" 
                            placeholder="Enter your name" 
                            value={name} 
                            onChange={(e)=>setName(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <input 
                            type="text" 
                            className="form-control" 
                            placeholder="Enter your phone" 
                            value={phone}
                            onChange={(e)=>setPhone(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <input 
                            type="text" 
                            className="form-control" 
                            placeholder="Enter your email" 
                            value={email}
                            onChange={(e)=>setEmail(e.target.value)}
                        />
                    </div>
                    <button className="btn btn-primary" type="Submit">Update your time</button>
                </form>
            </div>
        </div>
    )
}