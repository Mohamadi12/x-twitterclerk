import React from 'react'
import Input from '../components/Input'

const Home = () => {
  return (
    <div className="min-h-screen max-w-xl mx-auto border-r border-l">
      <div className="py-2 px-3 sticky top-0 z-50 bg-white border-b border-gray-200">
        <h2 className="text-lg font-bold sm:text-xl">Home</h2>
      </div>
      <Input/>
    </div>
  )
}

export default Home