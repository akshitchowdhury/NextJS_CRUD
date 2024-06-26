
import React from 'react'
import RemoveBtn from './RemoveBtn'
import Link from 'next/link'

import {HiPencilAlt} from 'react-icons/hi'

const getTopics = async ()=>{
    try {
      const res =  await fetch(`${process.env.NEXT_PUBLIC_API_URL}api/topics`,
    {cache: 'no-store'})


    console.log(res)
    if(!res.ok){
        throw new Error("Failed to fetch topics")
    }

    return res.json()

    } catch (error) {
        console.log("Error loading topics", error)
    }
}



const TopicsList =async () => {

        const {topics} = await getTopics()

  return (
    <>
        {
            topics.map((t,index)=> (
                    
        <div className='p-4 border border-slate-300 my-3 mx-32
        flex justify-between gap-5 items-start' key={index}>
            <div>
                <h2 className='font-bold text-2xl'>{t.title}</h2>
                <div>{t.description}</div>
            </div>

            <div className='flex gap-2'>
            
            {/* We are passing t._id to RemoveBtn as a props becaus delete button's api works on searching an id and deleting 
            them..hence when t._id is accessible to RemoveBtn it becomes accessible for RemoveBtn to delete a selected
            topic block */}

                <RemoveBtn id={t._id}/>
            
                {/* editTopic has dynamic id so enclosing in back ticks.the dynamic id is fetched from Mongo DB id
                which is in variable "_id" ; t._id because calling from object t which is being mapped*/}
                <Link href={`/editTopic/${t._id}`}> 
                    <HiPencilAlt size={24}/>
                </Link>
            </div>
        </div>

            ))
        }


    </>
  )
}

export default TopicsList
