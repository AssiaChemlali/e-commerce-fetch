
import { useFormik } from 'formik';
import Button from '../components/common/Button';
import { useDispatch } from 'react-redux';
import {signUp } from '../store/auth/authSlice';
import { useNavigate } from 'react-router';
const Register = () => {

  const dispatch = useDispatch()
  const navigate = useNavigate()
  
  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
      email: '',
    },
    onSubmit: values => {
      dispatch(signUp({
        username: values.username,
        password: values.password,
        email: values.email,
      }))
       .unwrap()
        .then(() => { navigate("/login") })
        .catch((error) => {
          console.log(error)
        })
    },
  });

  return (
    <div className=' bg-light  mt-10 p-5 shadow w-100 rounded-md flex flex-col items-center justify-center mx-auto'>
      <form
        className='flex flex-col capitalize text-sm w-full'
        onSubmit={formik.handleSubmit}>
        <label htmlFor="username">usename</label>
        <input
          id="username"
          name="username"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.username}
          className='bg-background py-2 px-3 rounded-md mb-3 '
        />
        <label htmlFor="email">Email Address</label>
        <input
          id="email"
          name="email"
          type="email"
          onChange={formik.handleChange}
          value={formik.values.email}
          className='bg-background py-2 px-3 rounded-md mb-3 '
        />
        <label htmlFor="password">password</label>
        <input
          id="password"
          name="password"
          type="password"
          className='bg-background py-2 px-3 rounded-md mb-3 '
          onChange={formik.handleChange}
          value={formik.values.password}
        />

        <Button type="submit">
         Register
        </Button>
      </form>
    </div>
  )
}

export default Register
