import React from 'react'
import { useParams } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

export default function Update() {
    const {id} = useParams()
  console.log(id)
    const [name,setName] = useState()
    const [gender,setGender] = useState()
    const [age,setAge] = useState()


    const token1 = useSelector((store)=>
    store.isAuth
)
console.log("token1",token1)
const navi = useNavigate()

React.useEffect(()=>{
   if(token1 === false){
   
       navi("/admin/login")
   }
},[token1])



    const data = {
        name:name,
        gender:gender,
        age:age
      }
  const handelsub = ()=>{
    axios.patch(`https://newdbwithauth.herokuapp.com/teachers/${id}`, data).then(function(res){
        console.log("Done")
        alert("Updated Sucessfully")
       


    })
  }

  return (
    <div><h1>Update Information</h1>
    <input type="text" placeholder='Change Name' onChange={(e)=>{setName(e.target.value)}}/>
    <input type="text" placeholder='Enter Gender' onChange={(e)=>{setGender(e.target.value)}}/>
    <input type="text" placeholder='Enter age' onChange={(e)=>{setAge(e.target.value)}}/>
    <button type="button" class="btn btn-success" onClick={handelsub}>Submit</button>
</div>
  )
}
