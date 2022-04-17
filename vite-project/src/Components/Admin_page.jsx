import React, { useState } from 'react'
import { store } from '../Redux/Store'
import { useNavigate } from 'react-router-dom'
import { useSelector , useDispatch} from 'react-redux'
import { Link } from 'react-router-dom'
import axios from 'axios'
export default function Admin_page() {
const navi = useNavigate()
 const token1 = useSelector((store)=>
     store.isAuth
 )
 console.log("token1",token1)

React.useEffect(()=>{
    if(token1 === false){
    
        navi("/admin/login")
    }
},[token1])


const [data,setData] = useState([]);




React.useEffect(()=>{
getData()
},[])

const getData =  ()=>{
    axios.get("https://newdbwithauth.herokuapp.com/teachers").then(function(res){
        // dispatch(change_city(data))

        // for(var i = 0; i<res.data.length; i++){
        //     setData(res.data[i])
        // }
        var line = 0
  
      setData(res.data)
        

       
    })


}











  return (

    <>
  
    <div><h1>Welcome to admin page</h1></div>
      <Link to={"/add/teacher"}><h4>Add new Teacher</h4></Link>

    <div className='maindiv'> 
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
               <th>Classes</th>
               <th>Update</th>
               
           </tr>
       </thead>
       <tbody>
       {

data?.map((e,i)=> {
    return(
        <tr>
        <td>{i+1}</td>
        <td>{e.name}</td>
        <td>{e.gender}</td>
        <td>{e.age}</td>
        <td>Class</td>
        <td> <Link to={`/update/${e._id}`}><button type="button" class="btn btn-success">Update Info.</button></Link></td>


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









    </>

  )
}
