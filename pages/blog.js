import Link from 'next/link'
import React, {useState } from 'react'


const Blog = (props) => {
  const [blogs, setBlogs] = useState(props.allBlogs);
  
  return (
    <div className='justify-center items-center my-20 py-14 lg:mx-8'>
        <div className='justify-center items-center flex-col flex-1 p-[1rem] flex'>
        <h2 className='my-10 lg:text-3xl text-lg bg-violet-600 text-white py-2 px-14 rounded-xl hover:shadow-xl hover:shadow-violet-700'>All Blogs</h2>
        </div>
        <div className='container lg:flex space-x-2 space-y-2 flex-1'>
          {blogs.map((blogitem) => (
            <div key={blogitem.slug} className='card cursor-pointer dark:bg-gray-800 hover:shadow-violet-600 hover:shadow-xl lg:w-full'>
            <h2 className='font-bold text-xl'>{blogitem.title} ?</h2>
            <p>{blogitem.subtitle}</p>
            <Link href={`/blogpost/${blogitem.slug}`}><button className='my-2 text-violet-700 hover:text-gray-500'>Read More →</button></Link>
            </div>
          ))}
        </div>
    </div>
  )
};

export async function getServerSideProps(context) {
   let data = await fetch("http://localhost:3000/api/blogs")
   let allBlogs = await data.json()
  return {
    props: {allBlogs}, // will be passed to the page component as props
  }
}

export default Blog