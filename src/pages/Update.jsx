import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';



const Update = () => {
  
  const {id} = useParams()  // fetching blog id from url params


  const [title, setTitle]=useState("");
  const [body, setBody]=useState("");
  const [author,setAuthor]=useState("");

  const navigate = useNavigate()

    const fetchBlog = async() => {
      try { 
        const response = await fetch(`http://localhost:3000/blogs/${id}`)
        if(!response.ok){
          throw new Error("failed to fetch blog")
        } 

        const data = await response.json()
        setTitle(data.title)
        setBody(data.body)
        setAuthor(data.author)
        
      } catch (error) {
        console.log(error);
      }
    }

    useEffect(() => {
      fetchBlog()
    }, [id])


  const updateBlog = async(e) => {
    e.preventDefault()
    try {
      const updatedBlog = {title,body,author}
      const updateResponse = await fetch(`http://localhost:3000/blogs/${id}`,{
        method: "PUT",
        headers: { 
          "Content-Type": " application/json"
        },
        body:JSON.stringify(updatedBlog)
      })
      
      if(!updateResponse.ok){
        alert("Failed to update blog")
      }

      alert("Blog updated successfully")

      navigate("/")
      

    } catch (error) {

      console.log(error);
      
    }


  } 

  return (
    <div className="flex flex-col justify-between items-center">
      <h2>Update Blog</h2>

      <form onSubmit= {updateBlog} className="border p-5 bg-sky-300" >
        <div>
          <label className="block text-sm font-bold text-gray-700">
            Blog Title
          </label>
          <input
            onChange={(e)=> setTitle(e.target.value) }
            type="text"
            className="mt-1 block w-96 p-2 border border-gray-300 bg-slate-300 rounded-md shadow-sm outline-none focus:ring"
            value={title}
          />
        </div>
        <br />
        <br />
        <div>
          <label className="block text-sm font-bold text-gray-700">
            Blog Body
          </label>
          <textarea 
          onChange={(e)=>setBody(e.target.value) }
          value={body}
          className="mt-1 block w-96 h-80 p-2 border border-gray-300 bg-slate-300 rounded-md shadow-sm focus:ring outline-none" />
          
        </div>
        <br />
        <br />

        <div>
          <label className="block text-sm font-bold text-gray-700">
            {" "}
            Blog Author
          </label>
          <input
            type="text"
            onChange={(e)=>setAuthor(e.target.value) }
            value={author}
            className="mt-1 block w-96 p-2 border border-gray-300 bg-slate-300 rounded-md shadow-sm outline-none focus:ring"
          />
        </div>

        <br />
        <br />

        <button className="w-96 bg-purple-500 text-white p-2 rounded-md shadow-md hover:bg-purple-400 focus:ring focus:ring-purple-700 focus:bg-purple-700">
          {" "}
          Update Blog
        </button>
      </form>
    </div>

  )
}

export default Update