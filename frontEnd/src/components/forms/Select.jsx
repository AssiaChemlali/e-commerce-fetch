

const Select = ({  label, name, onChange, value, error, data }) => {


  return (
    <div className="flex flex-items flex-col gap-1 mb-5">
      <label className='text-sm capitalize font-semibold'>{label} <span className="text-red-500 text-lg">*</span></label>
      <select
        name={name}
        onChange={onChange}
        value={value}
        className='bg-background py-2 px-3 rounded-md capitalize w-full' >
        {
          data?.map(c => (
            <option key={c.country} value={c.country}>{c.country}</option>
          ))
        }

      </select>
      <p className='text-red-500 text-sm'> {error}</p>
    </div>
  )
}

export default Select
