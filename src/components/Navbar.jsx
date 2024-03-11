import React from 'react'

const Navbar = () => {
  return (
    <nav className="flex justify-between p-5 bg-blue-500">
        <div>
            <a href="#" className="text-white text-2xl">Logo</a>
        </div>
        <div>
            <a href="#" className="text-white mx-2">Home</a>
            <a href="#" className="text-white mx-2">About</a>
            <a href="#" className="text-white mx-2">Services</a>
            <a href="#" className="text-white mx-2">Contact</a>
        </div>
   </nav>
  )
}

export default Navbar