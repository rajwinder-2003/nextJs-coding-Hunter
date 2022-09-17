import React from 'react'

const Contact = () => {
  return (
    <div className='justify-center items-center flex-col flex-1 p-[1rem] flex mt-14 lg:mx-8'>
        <h2 className='my-10 lg:text-3xl text-lg bg-violet-600 text-white py-2 px-14 rounded-xl hover:shadow-xl hover:shadow-violet-700'>Contact Me</h2>
        <div className="card flex-col flex my-5 px-2 lg:mx-8 hover:shadow-xl hover:shadow-violet-700">
        <input class="px-4 w-80 md:w-96 lg:w-96 h-14 my-2 border outline-violet-600 border-gray-300 rounded-md" type="text" placeholder="Name"/>
        <input class="px-4 h-14 my-2 border outline-violet-600 border-gray-300 rounded-md" type="text" placeholder="Email address"/>
        <input class="px-4 h-14 my-2 border outline-violet-600 border-gray-300 rounded-md" type="text" placeholder="Phone number"/>
        <input class="px-4 h-14 my-2 border outline-violet-600 border-gray-300 rounded-md" type="text" placeholder="Address"/>
        <input class="px-4 h-14 my-2 border outline-violet-600 border-gray-300 rounded-md" type="text" placeholder="Contact Reason"/>
        <button class="bg-violet-600 hover:shadow-xl hover:shadow-violet-700 text-white my-3 py-3 rounded-lg font-bold">Submit</button>
        </div>
    </div>
  )
}

export default Contact