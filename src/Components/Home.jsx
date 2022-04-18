import React from 'react'
import {Link} from "react-router-dom"
import style from "../Components/home.css"
import { useState } from 'react'
import axios from "axios"
export default function Home() {
const [data,setData] = useState()
const [pagina,setpage] = useState(1)
const [searchd,setsearch] = useState()

const incre = (value)=>{
     setpage(pagina + value)
     console.log(typeof(pagina))
}


    let arr = []
React.useEffect(()=>{
    getData()
    
   
},[pagina])
    const getData =  ()=>{
    

        axios.get("https://newdbwithauth.herokuapp.com/teachers",{
          params:{
             page:pagina,
             size:5
          }
      }).then(function(res){
          var line = 0
        setData(res.data.product)
        console.log(res.data.product)
      })

      
       
    }


const search = ()=>{
  console.log(searchd)
  axios.get(`https://newdbwithauth.herokuapp.com/teachers/search/${searchd}`).then(function(res){
    var line = 0
  setData(res.data)
  console.log(res.data)
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
    
  return (
    <div className='maindiv'> 
     <Link to={"/admin/login"}><h2>Admin Login</h2></Link>
    <div>

    <input className='searchbox' type="text" onChange={(e)=>{setsearch(e.target.value)}} placeholder='Enter teacher name to search'/>
    <button onClick={search} type="button" class="btn btn-success">Search</button>
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
 <button onClick={()=>{incre(-1)}}>Prev</button>
 <button onClick={()=>{incre(1)}}>Next</button>
    </div> 
  )
}
