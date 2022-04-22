import  { useState } from 'react'
import axios from 'axios'
import React from 'react'
import { useParams } from 'react-router-dom'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
export default function Description() {
const {id} =  useParams()
const [data,setData] = useState()
React.useEffect(()=>{
   getData()
},[])

const getData = ()=>{
        if(data === undefined){
        axios.get(`https://newdbwithauth.herokuapp.com/teachers/${id}`).then(function(res){
            setData(res.data)
    })
               
        // The rest of the code
}

}
console.log(data)
  return (
      <>
      <Card sx={{ maxWidth: 345, margin:"auto" }}>
    

        
      <CardContent>
      <h2>Teacher Detail</h2>
    
      <h3>Name - {data?.name}</h3>
      <h3>Age - {data?.age}</h3>
      <h3>Gender - {data?.gender}</h3>
      <h5>Joined Date - {data?.createdAt}</h5>
      </CardContent>
      </Card>

      </>
  )
}
