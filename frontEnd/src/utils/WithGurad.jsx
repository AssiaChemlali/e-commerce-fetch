
import { useSelector } from 'react-redux'
import { Link } from 'react-router'

const WithGurad = (Component) => {


  const Wrapper = (props) => {
    const { isLogIn } = useSelector(state => state.auth.user)
    return isLogIn
      ? <Component {...props} />
      : <div className='py-5 mt-10 text-lg  text-center'>
        Please
        <Link to="/login" className='text-accent'> Log in </Link>Or {" "}
         <Link to="/register" className='text-accent'>sign up</Link> to see all products
      </div>
  }

  return (
    Wrapper
  )
}

export default WithGurad
