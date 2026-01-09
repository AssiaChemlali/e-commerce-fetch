
const Loading = ({children,loading,error,type}) => {

 return (
    <div className=''>
      {
        loading 
        ?<p className='text-primary'>skeleton... {type}</p>
        :error
        ?<p className='text-red-500'>{error}</p>
        :children
      }
    </div>
  )
}

export default Loading

