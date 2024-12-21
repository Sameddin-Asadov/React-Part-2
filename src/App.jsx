import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
const Base_Url = "https://jsonplaceholder.typicode.com"

function App() {
 
  const getPost = async(postId)=>{
const userInfo = await axios.get(`${Base_Url}/posts/${postId}`)
return userInfo.data.id
  }
  
  const getUser = async(UserId)=>{
    const  empInfo = await axios.get(`${Base_Url}/users/${UserId}`)
    return(empInfo.data)

  }

  const getFinish = async ()=>{
    const postInfo =    await getPost(1)
     const finishInfo =  await getUser(postInfo)
     console.log(finishInfo.name)
  }

  useEffect(  ()=>{
    getFinish()
  },[])
  return (
   <div>

   </div>
  )
}

export default App
