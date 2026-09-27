"use client"
import React, { useContext } from 'react'

import CommentCard from './CommentCard'
import { CommentContext } from '../useContext/CommentContext'
import ReplyCard from './ReplyCard'
import DeleteCard from './DeleteCard';

const CommentPage = () => {
  const {data , deleteId} = useContext(CommentContext)
  return (
    <div className='md:w-[80%] w-full mx-auto bg-gray-100 h-full flex px-2 relative justify-center flex-col space-y-4 '>
     
        {data.comments.map((comment, index) => (
          <CommentCard comment={comment} key={index} />
        ))}
        <ReplyCard buttonType="Send"/>
      
       {
                         deleteId &&
                        <DeleteCard/>
                    }

    </div>
  )
}

export default CommentPage