import React from 'react'

const BtnTitle = ({className, children}) => {
  return (
    <div className={`flex justify-center items-center border border-purple-400 rounded-4xl px-3 font-semibold py-0.5 text-purple-500 ${className} mb-8`}>
       {children}
    </div>
  )
}

export default BtnTitle