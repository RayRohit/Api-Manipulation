import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function Delete() {
    const url = "http://localhost:3000/Deleted";
    const[delData,setDelData]=useState(null);
    useEffect(()=>{
        axios.get(url).then((res)=>{
            setDelData(res.data)
        }).catch((err)=>console.log(err))
    },[])
    const handleRestore = (item) =>{
        try{
        axios.delete(`${url}/${item.id}`).then((res)=>{
            try{
                axios.post("http://localhost:3000/Users",item).then((res)=>{
                    window.location.reload()
                }).catch((err)=>console.log(err))
            }
            catch(err){
                console.log(err);
            }
        })
        } catch(err){
            console.log(err);
        }
    } 
  return (
    <div>
        <div className='container-fluid'>
            <div className='row pt-4'>
            <h3 className='text-danger text-center'>Archived Data</h3>
                {
                    delData!== null ? 
                    <>
                        {
                            delData.map((item)=>{
                                return(
                                    <div className='col-sm-4' key={item.id}>
                                        <div className='card' style={{width:"18rem"}}>
                                            <div className='card-body'>
                                                <h6>Name : {item.fname}</h6>
                                                <h6>Email : {item.email}</h6>
                                                <h6>Phone : {item.phone}</h6>
                                                <button className='btn btn-info' onClick={()=>handleRestore(item)}>Restore</button>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </> 
                    :
                    <>
                        <div className='container'>
                            <h4 className='text-center'>No Data To Show....</h4>
                        </div>
                    </>
                }
            </div>
        </div>
    </div>
  )
}
