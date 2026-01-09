
import { useNavigate, useRouteError } from 'react-router'
import Button from '../components/common/Button'

const Error = () => {
  const error = useRouteError()
  const navigate = useNavigate()
console.log(error)
  return (
    <div className='p-10 text-center flex flex-col items-center justify-center gap-2'>
      <h1 className='text-4xl text-primary my-5'>Ops! error {error.status}</h1>
       <p>{error.data} </p>
      <p>{error.statusText} </p>
      <Button type="button" onClick={()=>navigate("/",{replace:true})}>
        go back home
      </Button>

    </div>
  )
}

export default Error
