
import { Link, NavLink } from 'react-router'
import { links } from '../../data'
import { useSelector } from 'react-redux'
import Button from './Button'
import profileImg from '../../assets/profile.jpg'
import { useState } from 'react'
import { GetTotalCartQunatity } from '../../utils/utils'

import { FaShoppingCart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { GetTotalWishlist } from '../../utils/utils'

const Header = () => {
  const { isLogIn } = useSelector(state => state.auth)
  const [open, setOpen] = useState(false)
  const totalQuantity = GetTotalCartQunatity()
  const totalWishlist=GetTotalWishlist()

  return (
    <header className='flex  items-center justify-between bg-light py-5 px-5 shadow rounded-full w-full gap-5'>

      <div className="">
        <NavLink to="." className="text-dark font-bold text-2xl" end>Orima</NavLink>
      </div>


      <nav className='hidden sm:flex items-center justify-center gap-5'>
        {links.map((link, index) => (
          <NavLink
            key={index}
            to={link.link}
            className="capitalize font-semibold cursor-pointer hover:text-accent">{link.label}</NavLink>
        ))}
      </nav>

      <div className='flex relative items-center gap-2'>
        <div className='flex items-center gap-3 mr-3'>
          <Link to="cart" className='relative '>
            <FaShoppingCart size={20} />
            <span className='bg-background text-primary rounded-full  w-6 h-6 flex  items-center  justify-center absolute -top-5 -right-3  text-sm'> {totalQuantity}</span>

          </Link>
          <Link 
          to="wishlist" 
          className='relative '>
            <FaHeart size={20} />
            <span className='bg-background text-primary rounded-full  w-6 h-6 flex  items-center  justify-center absolute -top-5 -right-3  text-sm'> { totalWishlist}</span>
          </Link>
        </div>



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
