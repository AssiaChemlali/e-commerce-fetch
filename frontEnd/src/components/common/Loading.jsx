import React from 'react'

const Loading = ({children,loading,error}) => {
  return (
    <div className=''>
      {
        loading 
        ?<p className='text-primary'>loading please wait ...</p>
        :error
        ?<p className='text-red-500'>{error}</p>
        :children

      
      }
    </div>
  )
}

export default Loading

