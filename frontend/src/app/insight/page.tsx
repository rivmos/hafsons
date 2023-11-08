import PageBanner from '@/components/common/PageBanner'
import Image from 'next/image'
import React from 'react'

const blogData = [
    {
        id:1,
        title:'Savilia Blunk Embraces Longer Season with World Cup',
        image:'/img/blog/b1.png',
        date:'03 October 2023'
    },
    {
        id:2,
        title:'Savilia Blunk Embraces Longer Season with World Cup',
        image:'/img/blog/b2.png',
        date:'03 October 2023'
    },
    {
        id:3,
        title:'Savilia Blunk Embraces Longer Season with World Cup',
        image:'/img/blog/b3.png',
        date:'03 October 2023'
    },
    {
        id:4,
        title:'Savilia Blunk Embraces Longer Season with World Cup',
        image:'/img/blog/b4.png',
        date:'03 October 2023'
    },
    {
        id:5,
        title:'Savilia Blunk Embraces Longer Season with World Cup',
        image:'/img/blog/b5.png',
        date:'03 October 2023'
    },
    {
        id:6,
        title:'Savilia Blunk Embraces Longer Season with World Cup',
        image:'/img/blog/b6.png',
        date:'03 October 2023'
    },
    {
        id:7,
        title:'Savilia Blunk Embraces Longer Season with World Cup',
        image:'/img/blog/b7.png',
        date:'03 October 2023'
    },
    {
        id:8,
        title:'Savilia Blunk Embraces Longer Season with World Cup',
        image:'/img/blog/b8.png',
        date:'03 October 2023'
    },
    {
        id:9,
        title:'Savilia Blunk Embraces Longer Season with World Cup',
        image:'/img/blog/b9.png',
        date:'03 October 2023'
    },
]

const BlogCard = ({blogTitle, blogImage, blogDate} : {blogTitle:string, blogImage:string, blogDate:string}) => {
  return (
    <div className='p-8 rounded-xl'>
        <img src={blogImage} alt={`${blogTitle.slice(0,10)}... Image`} className='mb-4'/>
        <div className='space-y-2 flex flex-col items-center'>
        <h5 className=' text-textGrey'>{blogDate}</h5>
        <h5 className='font-light text-lg text-center'>{blogTitle}</h5>
        <button className='px-8 py-2 border-primaryColor border-[1px]'>Read More</button>
        </div>
    </div>
  )
}
const Insight = () => {
    return (
        <div>
            <PageBanner title='Insight' imgSrc='/img/page_banner_insight_one.png'/>

            <div className='container mx-auto py-20'>
                    <div className='grid grid-cols-3 gap-12'>
                    {
                        blogData.map(blog => <BlogCard key={blog.id} blogTitle={blog.title} blogDate={blog.date} blogImage={blog.image}/>)
                    }
                    </div>
            </div>
        </div>
    )
}

export default Insight