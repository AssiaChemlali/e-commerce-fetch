
import { NavLink } from 'react-router'
import { links } from '../../data'
import LeftHeader from './LeftHeader'

const Header = () => {

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

      <LeftHeader />

    </header>
  )
}

export default Header
