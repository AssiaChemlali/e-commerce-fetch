
import { useFormik } from 'formik';
import Button from '../components/common/Button';
import { Link } from 'react-router';
import { useDispatch } from 'react-redux';
import { logIn } from '../store/auth/authSlice';
const Login = () => {
  const dispatch=useDispatch()
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit:(values)=>{
      const user={
        id,
        email:values.email,
        password:values.password
      }
      dispatch(logIn(user))
      
    }

  });

  return (
    <div className=' bg-light  mt-10 p-5 shadow w-100 rounded-md flex flex-col items-center justify-center mx-auto'>
      <form 
      onSubmit={formik.handleSubmit} 
      className='flex flex-col capitalize text-sm w-full'>
        <label htmlFor="email" className='mb-1'>Email Address:</label>
        <input
          id="email"
          name="email"
          type="email"
          onChange={formik.handleChange}
          value={formik.values.email}
          className='bg-background py-2 px-3 rounded-md mb-3 capitalize'
        />
        <label htmlFor="password" className='mb-1'>password:</label>
        <input
          id="password"
          name="password"
          type="password"
          className='bg-background py-2 px-3 rounded-md mb-5 capitalize'
          onChange={formik.handleChange}
          value={formik.values.password}
        />
    
        <Button type="submit">
          Login in
        </Button>
      </form>

      <p className=' my-5 text-secondary font-bold'>If you don't have accont <Link to="/register" className='text-accent'>Register </Link> here</p>
    </div>
  )
}

export default Login
