import axios from 'axios';
import React, { useState } from 'react'

export default function Post() {
    const url = "http://localhost:3000/Users"
    
    const[person,setPerson] = useState({
        fname:'',
        email:'',
        phone:'',

    })
    const handleChange = (e) =>{
        let name = e.target.name;
        let value = e.target.value;
        // let files = e.target.files;
        // files === null ? setPerson({...person,[name]:value}) : setPerson({...person,[name]:files})
        setPerson({...person,[name]:value})
    }   
    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(person);
        try{
            axios.post(url,person).then((res)=>{
                setPerson({fname:'',email:'',phone:''})
            }).catch(err=>console.log(err))
        }
        catch(err){
            console.log(err);
        }
    }
  return (
    <div>
        <div className='container-fluid pt-4'>
            <div className='row p-3'>
                <div className='offset-sm-3 col-sm-4 shadow'>
                    <form className='p-3' onSubmit={handleSubmit}>
                    <h4>Please Fill the Below Form</h4>
                        <div>
                            <label htmlFor='fname' className='fw-bold'>Name :</label>
                            <input type="text" className='form-control fw-bold' id='fname' maxLength="20" value={person.fname} onChange={handleChange} name='fname' required />
                        </div>
                        <div>
                            <label htmlFor='email' className='fw-bold'>Email :</label>
                            <input type="email" className='form-control fw-bold' id='email' maxLength="20" value={person.email} onChange={handleChange} name='email' required />
                        </div>
                        <div>
                            <label htmlFor='phone' className='fw-bold'>Phone :</label>
                            <input type="tel" className='form-control fw-bold' id='phone' maxLength="15" pattern="[6-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9]" onChange={handleChange} value={person.phone} name='phone' required />
                        </div>
                        {/* <div>
                            <label htmlFor='file' className='fw-bold'>Image :</label>
                            <input type="file" className='form-control fw-bold' id='file' name='file' onChange={handleChange} required />
                        </div> */}
                        <div className='pt-3'>
                            <button className='btn btn-info' type='submit'>Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}
