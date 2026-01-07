import React from 'react'

const Loading = ({children,loading,error}) => {
  return (
    <div className=''>
      {
        loading 
        ?<p className='text-primary'>loading content.</p>
        :error
        ?<p className='text-red-500'>{error}</p>
        :children

      
      }
    </div>
  )
}

export default Loading

