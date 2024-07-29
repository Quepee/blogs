import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='w-full h-[100px] bg-green-300 flex items-center justify-between font-serif font-bold text-2xl'>
      <img className='h-20 w-40' src="QPee.png" alt="" />

      <div className='space-x-10'>
        <Link className='mr-3' to="/">Home</Link>
        <Link className='mr-3' to="/create">Create</Link>
        <Link className='mr-3' to="/update/:id">Update</Link>
        <Link className='mr-3' to="/blogs/:id">Blogpage</Link>
      </div>

      <div className=' bg-red-100 dark:md:hover:bg-fuchsia-300 rounded-md p-2'>
      {/* this empty div is important for the perfect spaces seen*/}
      search
      </div>
      

    </nav>
  )
}

export default Navbar
