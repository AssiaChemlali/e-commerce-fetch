
import { memo } from 'react'
import { Link } from 'react-router'

const Heading = memo(({title}) => {

  return (
    <div className='bg-light py-10  px-10 mb-5 text-center shadow'>
      <h1 className='text-3xl font-bold text-primary capitalize'>{title}</h1>
      <div className='mt-3 text-[13px] uppercase leading-5'>
        <Link to='/'>Home / </Link>
        <span>{title}</span>
      </div>
      
    </div>
  )
})

export default Heading
