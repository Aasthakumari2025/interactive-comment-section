"use client"
import React, { useContext } from 'react'

import { CommentContext } from '../useContext/CommentContext'

const DeleteCard = () => {
  const {deleteId, setdeleteId ,setdata , data} = useContext(CommentContext)
  function handleDeleteReply(delid){
   const deletereply = data.comments.filter((comment) => comment.id !== delid).map((comment) => ({...comment , replies:comment.replies ? comment.replies.filter((replies) => replies.id !== delid ): comment.replies}))

   setdata({...data ,comments : deletereply})
   setdeleteId(false)
  }
  return (
    <div className='absolute shadow-lg w-80 flex flex-col space-y-4  z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  p-5 bg-white rounded-lg'>
        <h2 className='text-2xl font-medium'>Delete Comment</h2>
        <p className='text-md text-gray-400 font-medium'>Are you sure you want to delete this comment? This will remove the comment and can&apos;t be undone.</p>
        <div className='flex w-full justify-evenly'>
            <button onClick={() => setdeleteId(false) } type='button' className='rounded-lg bg-gray-500 px-4 py-1.5 text-white font-medium text-lg'>N0,CANCEL</button>
          <button onClick={() =>handleDeleteReply(deleteId)} type='button' className='rounded-lg bg-red-500 px-4 py-1.5 text-white font-medium text-lg'>YES,DELETE</button>
        </div>
    </div>
  )
}

export default DeleteCard