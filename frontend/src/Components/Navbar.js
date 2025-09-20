import React from 'react'
import { Link } from 'react-scroll'

export default function Navbar() {

    const links=[
        { id:1,name:"Home",to:"home"},
        { id:2,name:"About",to:"about"},
        { id:3,name:"Skills",to:"skills"},
        { id:4,name:"Projects",to:"projects"},
        { id:5,name:"Certificates",to:"certificates"},
        { id:6,name:"Experience",to:"experience"},
        { id:7,name:"Contact",to:"contact"},

    ]
  return (
    <nav className='fixed top-0 left-0 w-full bg-black text-white shadow-md z-50'>
        <ul className='flex justify-center space-x-8 p-4'>
            {links.map(({id,name,to})=>(
                <li key={id} className='inline p-4 cursor-pointer text-teal-400 hover:text-white'>
                    <Link to={to}
                    smooth={true}
                    duration={500}
                    spy={true}
                    offset={-70}
                    activeClass="active-link"
                     >{name}</Link>
                </li>
            ))}
        </ul>
    </nav>
  )
}
