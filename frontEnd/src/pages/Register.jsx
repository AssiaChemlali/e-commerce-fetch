
import { useFormik } from 'formik';
import Button from '../components/common/Button';
import { useDispatch } from 'react-redux';
import { register } from '../store/auth/authSlice';
import { useNavigate } from 'react-router';
const Register = () => {

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const formik = useFormik({
    initialValues: {
      fullName: '',
      password: '',
      email: '',
    },
    onSubmit: values => {
      dispatch(register({
        fullName: values.fullName,
        password: values.password,
        email: values.email,
      }))
       .unwrap()
        .then(() => { navigate("/") })
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
        <label htmlFor="fullName">Full Name</label>
        <input
          id="fullName"
          name="fullName"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.fullName}
          className='bg-background py-2 px-3 rounded-md mb-3 capitalize'
        />
        <label htmlFor="email">Email Address</label>
        <input
          id="email"
          name="email"
          type="email"
          onChange={formik.handleChange}
          value={formik.values.email}
          className='bg-background py-2 px-3 rounded-md mb-3 capitalize'
        />
        <label htmlFor="password">password</label>
        <input
          id="password"
          name="password"
          type="password"
          className='bg-background py-2 px-3 rounded-md mb-3 capitalize'
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
