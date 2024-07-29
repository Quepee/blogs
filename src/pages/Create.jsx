// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";


// const Create = () => {
//   const [title, setTitle]=useState("");
//   const [body, setBody]=useState("");
//   const [author,setAuthor]=useState("");
//   const endPoint = "http://localhost:3000/blogs"

//   const navigate = useNavigate()

//   const addBlog = async(e) => {
//     e.preventDefault()
    
//     if(!title ||!body ||!author){
//       alert("Fill in all Fields")
//     }

//     try {
//       const newBlog={title,body,author}
//       const blogResponse= await fetch(endPoint,{
//         method: "POST", 
//         headers: {
//           "Content-Type": "application/json"
//         },
//         body:JSON.stringify(newBlog)
//       }) 

//       if(!blogResponse.ok){
//         alert("Failed to add blog")
//       }

//       alert("Blog added successfully")

//       navigate("/")
      
//     } catch (error) {
//       console.error(error)
//     }
//   }
//   return (
//     <div className="flex flex-col justify-between items-center">
//       <h2>Add New Blog</h2>

//       <form onSubmit= {addBlog} className="border p-5 bg-sky-300" >
//         <div>
//           <label className="block text-sm font-bold text-gray-700">
//             Blog Title
//           </label>
//           <input
//             onChange={(e)=> setTitle(e.target.value) }
//             type="text"
//             className="mt-1 block w-96 p-2 border border-gray-300 bg-slate-300 rounded-md shadow-sm outline-none focus:ring"
//             value={title}
//           />
//         </div>
//         <br />
//         <br />
//         <div>
//           <label className="block text-sm font-bold text-gray-700">
//             Blog Body
//           </label>
//           <textarea 
//           onChange={(e)=>setBody(e.target.value) }
//           value={body}
//           className="mt-1 block w-96 h-80 p-2 border border-gray-300 bg-slate-300 rounded-md shadow-sm focus:ring outline-none" />
          
//         </div>
//         <br />
//         <br />

//         <div>
//           <label className="block text-sm font-bold text-gray-700">
//             {" "}
//             Blog Author
//           </label>
//           <input
//             type="text"
//             onChange={(e)=>setAuthor(e.target.value) }
//             value={author}
//             className="mt-1 block w-96 p-2 border border-gray-300 bg-slate-300 rounded-md shadow-sm outline-none focus:ring"
//           />
//         </div>

//         <br />
//         <br />

//         <button className="w-96 bg-purple-500 text-white p-2 rounded-md shadow-md hover:bg-purple-400 focus:ring focus:ring-purple-700 focus:bg-purple-700">
//           {" "}
//           Add Blog
//         </button>
//       </form>
//     </div>
//   );
// };

// export default Create;



import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("");
  const endPoint = "http://localhost:3000/blogs";

  const navigate = useNavigate();

  const addBlog = async (e) => {
    e.preventDefault();

    if (!title || !body || !author) {
      alert("Fill in all Fields");
      return;
    }

    try {
      const newBlog = { title, body, author };
      const blogResponse = await fetch(endPoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newBlog),
      });

      if (!blogResponse.ok) {
        alert("Failed to add blog");
        return;
      }

      alert("Blog added successfully");
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div
      className="flex flex-col justify-center items-center min-h-screen bg-cover bg-center"
      style={{ backgroundImage: 'url("/image.jpg")' }}
    >
      <h2 className="text-3xl font-bold text-white mb-8">Add New Blog</h2>

      <form onSubmit={addBlog} className="border p-5 bg-sky-300 bg-opacity-90 rounded-lg shadow-lg">
        <div>
          <label className="block text-sm font-bold text-gray-700">
            Blog Title
          </label>
          <input
            onChange={(e) => setTitle(e.target.value)}
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
            onChange={(e) => setBody(e.target.value)}
            value={body}
            className="mt-1 block w-96 h-80 p-2 border border-gray-300 bg-slate-300 rounded-md shadow-sm focus:ring outline-none"
          />
        </div>
        <br />
        <br />

        <div>
          <label className="block text-sm font-bold text-gray-700">
            Blog Author
          </label>
          <input
            type="text"
            onChange={(e) => setAuthor(e.target.value)}
            value={author}
            className="mt-1 block w-96 p-2 border border-gray-300 bg-slate-300 rounded-md shadow-sm outline-none focus:ring"
          />
        </div>

        <br />
        <br />

        <button className="w-96 bg-purple-500 text-white p-2 rounded-md shadow-md hover:bg-purple-400 focus:ring focus:ring-purple-700 focus:bg-purple-700">
          Add Blog
        </button>
      </form>
    </div>
  );
};

export default Create;
