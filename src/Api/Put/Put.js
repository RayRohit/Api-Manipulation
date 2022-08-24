import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import {TiArrowBack} from 'react-icons/ti'

export default function Put() {
  
  const param = useParams()
  const navigate = useNavigate()
  console.log(param)
  const[edit,setEdit] = useState(null)
  const[isEdit,setIsEdit] = useState(false)

  useEffect(()=>{
    axios.get(`http://localhost:3000/Users/${param.id}`)
    .then((res)=>setEdit(res.data)).catch((err)=>console.log(err))
  },[param.id])
  
  function handleUpdate(e){
    e.preventDefault()
    console.log(edit);
    axios.put(`http://localhost:3000/Users/${param.id}`,edit).then((res)=>console.log(res.data)).catch((err)=>console.log(err))
    window.location.reload()
  }
  function handleChange(e){
    let name = e.target.name
    let value = e.target.value;
    console.log(edit);
    setEdit({...edit,[name]:value})
    console.log(edit);
  }
    return (
      <div className='container-fluid'>
        <div className='row'>
          {
            edit === null ?   
            <h5 className='text-center'>No data to edit</h5> : 
            <>
              {
                isEdit ? 
                <>
                <div className='m-3'>
                  <button className='btn btn-info' onClick={() => navigate(-1)} ><TiArrowBack /></button>
                </div>
                <div className='offset-sm-3 col-sm-4 shadow mt-4'>
                    <form className='p-3' onSubmit={handleUpdate}>
                    <h4>Please Fill the Below Form</h4>
                        <div>
                            <label htmlFor='fname' className='fw-bold'>Name :</label>
                            <input type="text" className='form-control fw-bold' id='fname' maxLength="20" placeholder={edit.fname} onChange={handleChange} name='fname' required />
                        </div>
                        <div>
                            <label htmlFor='email' className='fw-bold'>Email :</label>
                            <input type="email" className='form-control fw-bold' id='email' maxLength="20" placeholder={edit.email} onChange={handleChange} name='email' required />
                        </div>
                        <div>
                            <label htmlFor='phone' className='fw-bold'>Phone :</label>
                            <input type="tel" className='form-control fw-bold' id='phone' maxLength="10" pattern="[6-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9]" onChange={handleChange} placeholder={edit.phone} name='phone' required />
                        </div>
                        <div className='pt-3'>
                            <button className='btn btn-info' type='submit'>Update</button>
                        </div>
                    </form>
                </div>
                </> :
                <>
                <div className='m-3'>
                  <button className='btn btn-info' onClick={() => navigate(-1)} ><TiArrowBack /></button>
                </div>
                <div className='col-sm-3' >
                  <div className='card border-0 shadow' style={{width:"18rem"}}>
                      <div className='card-body'>
                          <h6>Name : {edit.fname}</h6>
                          <h6>Email : {edit.email}</h6>
                          <h6>Phone : {edit.phone}</h6>
                          <button className='btn btn-info' onClick={()=>setIsEdit(true)}>Edit</button><span className='ps-3'></span>
                      </div>
                  </div>
                </div>
                </>
              }
            </>       
          }
        </div>
      </div>
   )
}
   