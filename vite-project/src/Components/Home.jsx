import React from 'react'
import {Link} from "react-router-dom"
import style from "../Components/home.css"
import { useState } from 'react'
import axios from "axios"
export default function Home() {
    const [data,setData] = useState()
    let arr = []
React.useEffect(()=>{
    getData()
},[])
    const getData =  ()=>{
        axios.get("https://newdbwithauth.herokuapp.com/teachers",{
            params:{
                _page:1,
               _limit:5
            }
        }).then(function(res){
            var line = 0
          setData(res.data)
        })
    }
    // const getData = ()=>{
    //     axios.get("http://localhost:8080/getres",{
    //         params:{
    //             _page : 1,
    //             _limit: 5,
    //             ratings:count,
    //         }
    //     }).then(function(res){
    //        setdata(res.data)
    //        console.log(data)
    //        setFlag(res.data)
    //     })

    // data.map((e)=>{
    //     console.log(e.name)
    // })
    // console.log(data.id)
    console.log(data)
  return (
    <div className='maindiv'> 
     <Link to={"/admin/login"}><h2>Admin Login</h2></Link>
    <div>
    </div>
  <div>
   <table>
       <thead>
           <tr>
               <th>id</th>
               <th>Name</th>
               <th>Gender</th>
               <th>Age</th>
              
               
           </tr>
       </thead>
       <tbody>
       {

data?.map((e,i)=> {
    return(
        <tr>
        <td>{i+1}</td>
        <td>
      <Link to={`/decription/${e._id}`}>
                 {e.name}
        
         
          </Link> 
          </td> 
        <td>{e.gender}</td>
        <td>{e.age}</td>
        </tr>

    )

    
})
}
    


                   
              
           
       </tbody>
   </table>
 
   </div>
 {/* <button onClick={sortCountry} >Filter By Country</button>
 <button onClick={SortPopu}>Sort by Population</button> */}
    </div> 
  )
}
