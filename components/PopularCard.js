import Link from 'next/link'
import React, { useEffect, useState } from 'react'

const PopularCard = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/api/blogs")
    .then((x) => {
      return x.json();
    })
    .then((y) => {
      setBlogs(y)
    })
  }, [])
  
  
  return (
    <div className='container lg:flex space-x-2 space-y-2 flex-1'>
      {blogs.map((blogitem) => (
        <div key={blogitem.slug} className='card cursor-pointer dark:bg-gray-800 hover:shadow-violet-600 hover:shadow-xl lg:w-full px-2'>
            <h2 className='font-bold text-xl px-4'>{blogitem.title} ?</h2>
            <p className='px-4'>{blogitem.subtitle}</p>
            <Link href={`/blogpost/${blogitem.slug}`}><button className='my-2 text-violet-700 hover:text-gray-500 px-4'>Read More →</button></Link>
        </div>
      ))}
    </div>
  )
};

export default PopularCard