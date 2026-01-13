

const Input = ({type, label,register,name,errors,required,...props}) => {

  const error=errors[name]
    console.log(error?.type)
  return (
    <div className="flex flex-items flex-col gap-1 mb-5">
      <label className='text-sm capitalise'>{label}</label>
      <input
        type={type}
        {...register(name, { required,...props})}
         aria-invalid={error ? "true" : "false"}
        className='bg-background py-2 px-3 rounded-md capitalize w-full' />
        {error?.type === "required" && (
        <p className="text-red-500 mb-3">{label} is required</p>
      )}
    </div>
  )
}

export default Input
