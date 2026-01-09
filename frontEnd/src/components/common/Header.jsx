
import { Link, NavLink } from 'react-router'
import { links } from '../../data'
import { useSelector } from 'react-redux'
import Button from './Button'
import profileImg from '../../assets/profile.jpg'
import { useState } from 'react'
const Header = () => {
  const { isLogIn } = useSelector(state => state.auth)
  const [open, setOpen] = useState(false)
  return (
    <header className='flex  items-center justify-between bg-light py-2 px-5 shadow rounded-xl w-full gap-5'>

      <div className="text-bold text-xl">
        <NavLink to="." className="text-dark" end>Orima</NavLink>
      </div>


      <nav className='flex items-center justify-center gap-5'>
        {links.map((link, index) => (
          <NavLink
            key={index}
            to={link.link}
            className="capitalize font-semibold cursor-pointer hover:text-accent">{link.label}</NavLink>
        ))}



      </nav>


      <div className='flex relative'>



        {isLogIn ?
          <>
            <div className="cursor-pointer w-10 h-10" onClick={() => setOpen(!open)}>
              <img src={profileImg} alt="" className='w-full h-full rounded-full ' />
            </div>
            {open && (<ul className="absolute  w-40 top-15 -right-5 bg-white  rounded-xl shadow capitalize text-md  transition-all duration-100">
              <li>
                <NavLink
                  to="dashboard"
                  className="block px-5 py-3 hover:bg-gray-100"
                >Dashbored</NavLink>
              </li>
              <li>
                <NavLink
                  to=""
                  className="block px-5 py-3 hover:bg-accent hover:text-white">my accounts</NavLink>
              </li>
              <li>
                <NavLink
                  to=""
                  className="block px-5 py-3 hover:bg-accent hover:text-white">Log out</NavLink>
              </li>

            </ul>)}


          </>
          :
          <Button type="button">
            <Link to="login">Login</Link>
          </Button>
        }

      </div>

    </header>
  )
}

export default Header
