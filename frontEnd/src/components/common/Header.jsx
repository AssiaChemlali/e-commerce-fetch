
import { NavLink } from 'react-router'
import { links } from '../../data'
const Header = () => {
  return (
    <header className='flex justify-between bg-light py-2 px-5 shadow rounded-xl w-full'>
      <div className="w-full text-bold text-xl">
        <NavLink to="." className="text-dark" end>Orima</NavLink>
      </div>
      <nav className='flex items-center justify-between gap-5 '>
        {links.map((link,index)=>(
          <NavLink  
          key={index} 
          to={link.link} 
          className="capitalize font-semibold cursor-pointer hover:text-accent">{link.label}</NavLink> 
        ))}
         
           

      </nav>
      
    </header>
  )
}

export default Header
