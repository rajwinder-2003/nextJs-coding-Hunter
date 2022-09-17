import React, { useState } from 'react'
import Link from 'next/link';

const Slug = (props) => {
  const [blog, setBlog] = useState(props.blog);
  return (
    <div className='justify-center items-center my-10 py-8 lg:mx-8'>
        <div className='justify-center items-center flex-col flex-1 p-[1rem] flex' >
        <h2 className='my-8 lg:text-3xl text-lg bg-violet-600 text-white py-2 px-14 rounded-xl hover:shadow-xl hover:shadow-violet-700'>Blog</h2>
        <h3 className='my-10 lg:text-xl text-lg py-2 px-14'></h3>
        </div>
        <div className='container lg:flex space-x-2 space-y-2 flex-1 justify-center items-center px-4'>
        <div className='card block cursor-pointer dark:bg-gray-800 hover:shadow-violet-600 hover:shadow-xl'>
            <h2 className='font-bold text-xl text-center my-4'>{blog && blog.title} ?</h2>
            <p>{blog && blog.content}</p>
            <Link href='/blog'>
            <button className='my-3 cursor-pointer bg-violet-600 px-6 py-2 rounded-full text-white hover:shadow-xl hover:shadow-violet-700'>← Back</button></Link>
        </div>
        </div>
    </div>
  )
};

export async function getServerSideProps(context) {
    // const router = useRouter();
    const {slug} = context.query;
   let data = await fetch(`http://localhost:3000/api/getblog?slug=${slug}`)
   let blog = await data.json();
  
  return {
    props: {blog}, // will be passed to the page component as props
  }
}

export default Slug