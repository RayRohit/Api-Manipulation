import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function Gett() {
    const url = "http://localhost:3000/Users"
    const[data,setData] = useState(null);
    useEffect(()=>{
        axios.get(url)
        .then((res)=>
        {
            setData(res.data)
        }
        ).catch((err)=>console.log(err))
    },[])
    const handleDelete = (item) =>{
        axios.delete(`${url}/${item.id}`).then((res)=>{
            console.log(res.data)

            try{
                axios.post("http://localhost:3000/Deleted",item).then((res)=>console.log(res)).catch((err)=>console.log(err))
            }
            catch(err){

            }

            window.location.reload();
        }).catch(err=>console.log(err))
    }
  return (
    <div>
        <div className='container-fluid pt-4'>
            <div className='row'>
            {
                data !== null ? 
                <>
                    {
                        data.map((item)=>{
                            return(
                                <div className='col-sm-3' key={item.id}>
                                    <div className='card border-0 shadow' style={{width:"18rem"}}>
                                        <div className='card-body'>
                                            <h6>Name : {item.fname}</h6>
                                            <h6>Email : {item.email}</h6>
                                            <h6>Phone : {item.phone}</h6>
                                            <button className='btn btn-danger' onClick={()=>handleDelete(item)}>Remove</button><span className='ps-3'></span>
                                            <button className='btn btn-warning'>Edit</button>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                        
                    }
                </> : 
                <>
                    <div className='container'>
                        <div className='text-center'>
                            <h4 className='pt-5 text-secondary'>No Data To Show....</h4>
                        </div>
                    </div>
                </>
            }
            </div>
        </div>
    </div>
  )
}
