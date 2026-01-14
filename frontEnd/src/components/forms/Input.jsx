

const Input = ({ type, label, name,onChange,value,error }) => {





  return (
    <div className="flex flex-items flex-col gap-1 mb-5">
      <label className='text-sm capitalize font-semibold'>{label} <span className="text-red-500 text-lg">*</span></label>
      <input
        type={type}
        name={name}
        onChange={onChange}
        value={value}
        className='bg-background py-2 px-3 rounded-md capitalize w-full' />
         <p className='text-red-500 text-sm'> {error}</p>


    </div>
  )
}

export default Input
