import React from 'react'
import { Link } from 'react-router-dom'

export default function PostCard({key ,post}) {
  return (
    <div className="group relative w-full border hover:border-2 border-teal-500 h-[400px] overflow-hidden
    rounded-lg sm:w-[430px]">
        <Link to={`/post/${post.slug}`}>
            <img 
                src={post.image}   
                alt='post cover' 
                className='h-[260px] w-full object-cover rounded-lg 
                shadow-lgg group-hover:h-[200px] transition-all duration-300 z-20' 
            />
        </Link>
        <div className="p-3 gap-2 flex flex-col justify-center items-center">
            <p className='text-lg font-semibold line-clamp-2'>{post.title}</p>
            <span className='italic text-sm'>{post.category}</span>
            <Link to={`/post/${post.slug}`} 
                className='z-10 group-hover:bottom-0 absolute bottom-[-200px] left-0 right-0 border 
                border-teal-500 text-teal-500 hover:bg-teal-500 hover:text-white transition-all 
                duration-300 text-center rounded-md !rounded-tl-none m-2'>
                Read article
            </Link>    
        </div>
    </div>
  )
}
