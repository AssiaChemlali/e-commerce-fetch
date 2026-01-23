
import { Link, NavLink } from 'react-router'
import Button from './Button'
import profileImg from '../../assets/profile.jpg'
import { useState } from 'react'
import { FaShoppingCart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { useDispatch,useSelector } from 'react-redux'
import { logOut } from '../../store/auth/authSlice'
import { useTotalCartQuantity } from '../../hooks/useTotalCartQuantity'
import { useTotalWishlist } from '../../hooks/useTotalWishlist'



const LeftHeader = () => {
  const { isLogIn } = useSelector(state => state.auth)
  const dispatch=useDispatch()
  const [open, setOpen] = useState(false)
  const totalQuantity = useTotalCartQuantity()
  const totalWishlist = useTotalWishlist()
  return (
    <div className='flex relative items-center gap-2'>
      <div className='flex items-center gap-3 mr-3'>
        <Link to="cart" className='relative '>
          <FaShoppingCart size={20} />
          <span className='bg-accent text-light rounded-full  w-6 h-6 flex  items-center  justify-center absolute -top-4 -right-3  text-sm'> {totalQuantity}</span>

        </Link>
        <Link
          to="wishlist"
          className='relative '>
          <FaHeart size={20} />
          <span className='bg-accent text-light rounded-full  w-6 h-6 flex  items-center  justify-center absolute -top-4 -right-3  text-sm'> {totalWishlist}</span>
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
                to="logout"
                onClick={()=>dispatch(logOut())}
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
  )
}

export default LeftHeader
